    var myQuestion = document.getElementById("myQuestion");
    var myOption0 = document.getElementById("myOption0");
    var myOption1 = document.getElementById("myOption1");
    var myOption2 = document.getElementById("myOption2");
    var countQun = document.getElementById("countQun").innerHTML;
    var btnCheck = document.querySelectorAll(".optiobBtn");
    var n;
    var ansCount = 0;
    var flag = false;
    var selectedValues = [];
    document.querySelector(".resultPanel").style.display = "none";


    //function constructor to create several questions

    var Question = function (question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    //prototype function to display questions and options on DOM

    Question.prototype.displayQuestion = function () {
        myQuestion.innerHTML = this.question;
        for (var i = 0; i < this.options.length; i++) {
            myOption0.value = this.options[0];
            myOption1.value = this.options[1];
            myOption2.value = this.options[2];
        }
    }

    //objects created from function constructors

    var first = new Question('Which is the capital city of Germany?', ['Stutgart', 'Berlin', 'Frankfurt'], 'Berlin');
    var second = new Question('Which is the capital city of India?', ['New-Delhi', 'Kolkata', 'Gujarat'], 'New-Delhi');
    var third = new Question('Which is the capital city of Netherlands?', ['Utrecht', 'Hague', 'Amsterdam'], 'Amsterdam');
    var forth = new Question('Which is the capital city of France?', ['Lyon', 'Paris', 'Marseille'], 'Paris');
    var fifth = new Question('Which is the capital city of Spain?', ['Barcelona', 'Valencia', 'Madrid'], 'Madrid');

    var questionArr = [first, second, third, forth, fifth]; //all questions are stored in an array



    function generateRandomQun() {
        btnCheck.forEach((cur) => {

            cur.addEventListener('click', () => {
                flag = true;
                document.getElementById("nextBtn").disabled = false;
            });
        });

        if (flag || countQun == 0) {

            if (countQun > 0) {
                questionArr.splice(n, 1);
            }

            if (questionArr.length == 0) {
                document.querySelector(".quizPanel").style.display = "none";
                document.querySelector(".resultPanel").style.display = "block";
                return;
            }

            n = Math.floor(Math.random() * ((questionArr.length - 1) - 0 + 1)) + 0; //creating random number between 0 and 4

            countQun++;
            document.getElementById("countQun").innerHTML = countQun; // Assigning the question number
            questionArr[n].displayQuestion(); // calling displayQuestion 
            document.getElementById("nextBtn").disabled = true;
            document.querySelector(".resultPanel").style.display = "none";
            flag = false;
        }

    }

    //function to display the score 

    function getClickedAns(clicked_val) {
        if (clicked_val === questionArr[n].answer) {
            ansCount++;
        } else {
            ansCount;
        }
        document.getElementById("totalScores").innerHTML = ansCount; //updating score to the DOM

        var clickedObject = {
            clickedQun: questionArr[n].question,
            clickedOpt: clicked_val,
            correctAns: questionArr[n].answer
        };

        selectedValues.push(clickedObject);

        document.getElementById("questionOne").innerHTML = selectedValues[0].clickedQun;
        document.getElementById("correctOne").innerHTML = selectedValues[0].correctAns;
        document.getElementById("yourAnswerOne").innerHTML = selectedValues[0].clickedOpt;

        document.getElementById("questionTwo").innerHTML = selectedValues[1].clickedQun;
        document.getElementById("correctTwo").innerHTML = selectedValues[1].correctAns;
        document.getElementById("yourAnswerTwo").innerHTML = selectedValues[1].clickedOpt;

        document.getElementById("questionThree").innerHTML = selectedValues[2].clickedQun;
        document.getElementById("correctThree").innerHTML = selectedValues[2].correctAns;
        document.getElementById("yourAnswerThree").innerHTML = selectedValues[2].clickedOpt;

        document.getElementById("questionForth").innerHTML = selectedValues[3].clickedQun;
        document.getElementById("correctFour").innerHTML = selectedValues[3].correctAns;
        document.getElementById("yourAnswerFour").innerHTML = selectedValues[3].clickedOpt;

        document.getElementById("questionFifth").innerHTML = selectedValues[4].clickedQun;
        document.getElementById("correctFive").innerHTML = selectedValues[4].correctAns;
        document.getElementById("yourAnswerFive").innerHTML = selectedValues[4].clickedOpt;

        if (selectedValues[0].clickedOpt === selectedValues[0].correctAns) {
            document.getElementById("newScoreOne").innerHTML = "1";
        } else {
            document.getElementById("newScoreOne").innerHTML = "0";
        }
        if (selectedValues[1].clickedOpt === selectedValues[1].correctAns) {
            document.getElementById("newScoreTwo").innerHTML = "1";
        } else {
            document.getElementById("newScoreTwo").innerHTML = "0";
        }
        if (selectedValues[2].clickedOpt === selectedValues[2].correctAns) {
            document.getElementById("newScoreThree").innerHTML = "1";
        } else {
            document.getElementById("newScoreThree").innerHTML = "0";
        }
        if (selectedValues[3].clickedOpt === selectedValues[3].correctAns) {
            document.getElementById("newScoreFour").innerHTML = "1";
        } else {
            document.getElementById("newScoreFour").innerHTML = "0";
        }
        if (selectedValues[4].clickedOpt === selectedValues[4].correctAns) {
            document.getElementById("newScoreFive").innerHTML = "1";
        } else {
            document.getElementById("newScoreFive").innerHTML = "0";
        }
    }
