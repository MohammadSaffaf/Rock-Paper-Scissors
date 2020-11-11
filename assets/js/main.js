let show =document.getElementById("show")
let result=document.getElementById("result")
let user=document.getElementById('user')
let comp=document.getElementById('comp')
let rock=document.getElementById('rock')
let paper=document.getElementById('paper')
let scissors=document.getElementById('scissors')
let roundResult=document.getElementById('rounds-result')
let roundMin=document.getElementById('rounds-min')
let roundsMax=document.getElementById('rounds-max')
let lett=document.getElementById('let')
let mUser = 0;
let mComp = 0;
let mall =0

function manyRunde() {
 let round5 = document.getElementById("funf");
let round10 = document.getElementById("zehn");
let round15 = document.getElementById("funfzehn");
valuee=0
// let round20 = document.getElementById("zwanzig");
    if (round5.checked) {
        valuee=5
        roundsMax.innerHTML=5
        
    }else if (round10.checked) {
        valuee = 10;
        roundsMax.innerHTML=10
      } else if (round15.checked) {
        valuee = 15;
        roundsMax.innerHTML=15
      } else  {
        valuee = 20;
        roundsMax.innerHTML=20
      }
      return valuee;
      
    }
    // console.log(manyRunde());
    
    scissors.addEventListener("click", () => {
        
        // rockSpan.style.borderColor = "#fff";
        // paperSpan.style.borderColor = "#fff";
        // scissorsSpan.style.borderColor = "#fff";
        // let round = getRounds();
        // container.style.display = "none";
        // roundContainer.style.display = "block";
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        console.log(x);
        ++mall;
        if (mall < manyRunde()) {
            roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
            roundMin.innerHTML = mall++;
          console.log("finish");
        //   test.style.display = "none";
        //   rechnen();
        }
        if (x == 0) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   scissorsSpan.style.borderColor = "green";
          lett.innerHTML = `<p><b>Scissors</b> VS <b>Paper</b>. <span style="color:green">You win!</span></p>`;
        } else if (x == 1) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   scissorsSpan.style.borderColor = "red";
          lett.innerHTML = `<p><b>Scissors</b> VS <b>Rock</b>. <span style="color:red">You lose!</span></p>`;
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   scissorsSpan.style.borderColor = "grey";
          lett.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Scissors</b>.</p>`;
         }
       });





       rock.addEventListener("click", () => {
        // console.log(mall.target);
        // rockSpan.style.borderColor = "#fff";
        // paperSpan.style.borderColor = "#fff";
        // scissorsSpan.style.borderColor = "#fff";
        // let round = getRounds();
        // container.style.display = "none";
        // roundContainer.style.display = "block";
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        console.log(x);
        ++mall;
        if (mall < manyRunde()) {
          roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
          roundMin.innerHTML = mall++;
          console.log("finish");
          test.style.display = "none";
        //   rechnen();
        endResult()
        
        }
      
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "red";
          lett.innerHTML = `<p><b>Rock</b> VS <b>Paper</b> . <span style="color:red">You lose!</span></p>`;
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "grey";
          lett.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Rock</b>.</p>`;
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   rockSpan.style.borderColor = "green";
          lett.innerHTML = `<p><b>Rock</b> VS <b>Scissors</b>. <span style="color:green">You win!</span></p>`;
        }
      });
  
      paper.addEventListener("click", () => {
        // console.log(mall.target);
        // rockSpan.style.borderColor = "#fff";
        // paperSpan.style.borderColor = "#fff";
        // scissorsSpan.style.borderColor = "#fff";
        // let round = getRounds();
        // container.style.display = "none";
        // roundContainer.style.display = "block";
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        console.log(x);
        ++mall;
        if (mall < manyRunde()) {
          roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
          roundMin.innerHTML = mall++;
          console.log("finish");
        //   test.style.display = "none";
        //   rechnen();
        endResult()
        }
      
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "red";
        //   lett.innerHTML = `<p><b>Rock</b> VS <b>Paper</b> . <span style="color:red">You lose!</span></p>`;
        lett.innerHTML = `<p> ROCK <span>[user]</span> PAPER <span>[comp]</span></p> `
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "grey";
          lett.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Rock</b>.</p>`;
        } else  {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   rockSpan.style.borderColor = "green";
          lett.innerHTML = `<p><b>Rock</b> VS <b>Scissors</b>. <span style="color:green">You win!</span></p>`;
        }
      });

      function endResult() {
        if (user.innerHTML > comp.innerHTML) {
          lett.innerHTML = "Congratulations! You win! 🥳<br>Play again";
        } else if (user.innerHTML < comp.innerHTML) {
          lett.innerHTML = "You lose. 🥺 Try again";
        } else if ((user.innerHTML = comp.innerHTML)) {
          lett.innerHTML = "It is a draw. 🤝<br>Try to win";
        }
        // hier.style.display = "block";
      }
      
    //   function restarten() {
    //     console.log("test");
    //     location.reload();
    //   }
      
    //   newStart.innerHTML = `<p><a onclick="restarten()">restart</a></p>`;
// const restart = document.getElementById("neustart")
//     restart.addEventListener('click', () => location.reload())
function restart() {

    setTimeout(function () {
        location.reload()
    })
    console.log("object");
}