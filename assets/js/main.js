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
let section=document.querySelector('body')
let bilder=document.getElementById("bilder")

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
        
        // rock.style.borderColor = "rgb(255, 255, 255)";
        // rock.style.backgroundColor = "rgb(255, 255, 255)";
        // paper.style.borderColor = "#rgb(255, 255, 255)";
        // paper.style.backgroundColor = "#rgb(255, 255, 255)";
        // // scissors.style.borderColor = "#rgb(255, 255, 255)";
        // // scissors.style.backgroundColor = "#rgb(255, 255, 255)";
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
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        //   test.style.display = "none";
        //   rechnen();
        endResult()
        }
        if (x == 0) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   scissorsSpan.style.borderColor = "green";
        //   lett.innerHTML = `<p><b>Scissors</b> VS <b>Paper</b>. <span style="color:green">You win!</span></p>`;
        lett.innerHTML = `<p> SCISSORES<span>[user]</span> PAPER <span>[comp]</span> YOU WIN</p> `;
        // scissors.style.borderColor="yellow"
        // scissors.style.backgroundColor="rgba(0, 150, 0, 0.5)"
        } else if (x == 1) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   scissorsSpan.style.borderColor = "red";
        //   lett.innerHTML = `<p><b>Scissors</b> VS <b>Rock</b>. <span style="color:red">You lose!</span></p>`;
        lett.innerHTML = `<p> SCISSORES<span>[user]</span> ROCK <span>[comp]</span> YOU LOSE</p> `;
        // scissors.style.borderColor="black"
        // scissors.style.backgroundColor="rgba(255, 0, 0, 0.5)"
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   scissorsSpan.style.borderColor = "grey";
        //   lett.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Scissors</b>.</p>`;
        lett.innerHTML = `<p>It was a DRAW. You both chose SCISSORES.</p>`
        // scissors.style.borderColor="green"
        //  scissors.style.backgroundColor="rgba(0, 0, 200, 0.7)"
         }
         
       });





       rock.addEventListener("click", () => {
        // console.log(mall.target);
        // // rock.style.borderColor = "rgb(255, 255, 255)";
        // // rock.style.backgroundColor = "rgb(255, 255, 255)";
        // paper.style.borderColor = "#rgb(255, 255, 255)";
        // paper.style.backgroundColor = "#rgb(255, 255, 255)";
        // scissors.style.borderColor = "#rgb(255, 255, 255)";
        // scissors.style.backgroundColor = "#rgb(255, 255, 255)";
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
        //   console.log("finish");
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        //   rechnen();
        endResult()
        
        }
      
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "red";
        //   lett.innerHTML = `<p><b>Rock</b> VS <b>Paper</b> . <span style="color:red">You lose!</span></p>`;
        lett.innerHTML = `<p> ROCK<span>[user]</span> PAPER <span>[comp]</span> YOU LOSE</p> `;
        // rock.style.borderColor="black"
        // rock.style.backgroundColor="rgba(255, 0, 0, 0.5)"
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "grey";
        //   lett.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Rock</b>.</p>`;
        lett.innerHTML = `<p>It was a DRAW. You both chose ROCK.</p>`
        // rock.style.borderColor="green"
        // rock.style.backgroundColor="rgba(0, 0, 200, 0.7)"
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   rockSpan.style.borderColor = "green";
        //   lett.innerHTML = `<p> ROCK <span>[user]</span> SCISSORS <span>[comp]</span> YOU WIN</p>`;
        lett.innerHTML = `<p> ROCK<span>[user]</span> SCISSORS <span>[comp]</span> YOU WIN</p> `;
        // rock.style.borderColor="yellow"
        // rock.style.backgroundColor="rgba(0, 150, 0, 0.5)"
        }
      });
  
      paper.addEventListener("click", () => {
        // console.log(mall.target);
        // rock.style.borderColor = "rgb(255, 255, 255)";
        // rock.style.backgroundColor = "rgb(255, 255, 255)";
        // // paper.style.borderColor = "#rgb(255, 255, 255)";
        // // paper.style.backgroundColor = "#rgb(255, 255, 255)";
        // scissors.style.borderColor = "#rgb(255, 255, 255)";
        // scissors.style.backgroundColor = "#rgb(255, 255, 255)";
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
        //   console.log("finish");
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        //   test.style.display = "none";
        //   rechnen();
        endResult()
        }
      
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "red";
        //   lett.innerHTML = `<p><b>Rock</b> VS <b>Paper</b> . <span style="color:red">You lose!</span></p>`;
        lett.innerHTML = `<p>It was a DRAW. You both chose PAPER.</p>`
        // paper.style.borderColor="green"
        // paper.style.backgroundColor="rgba(0, 0, 200, 0.7)"
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        //   rockSpan.style.borderColor = "grey";
          lett.innerHTML = `<p> PAPER<span>[user]</span> ROCK <span>[comp]</span> YOU WIN</p> `;
        //   paper.style.borderColor="yellow"
        //   paper.style.backgroundColor="rgba(0, 150, 0, 0.5)"
        } else  {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        //   rockSpan.style.borderColor = "green";
        //   lett.innerHTML = `<p><b>Rock</b> VS <b>Scissors</b>. <span style="color:green">You win!</span></p>`;
        lett.innerHTML = `<p> PAPER <span>[user]</span> SCISSORS <span>[comp]</span> YOU LOSE</p>` 
        // paper.style.borderColor="black"
        // paper.style.backgroundColor="rgba(255, 0, 0, 0.5)"
        } 
      });

      function endResult() {
        if (user.innerHTML > comp.innerHTML) {
            section.style.backgroundImage="url('https://media2.giphy.com/media/jof1Ck9hcZIOlQyzDL/source.gif')"
            
          lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">Congratulations! You win!</p>'
        } else if (user.innerHTML < comp.innerHTML) {
            section.style.backgroundImage="url('https://i.pinimg.com/originals/93/94/01/939401aab667fb28f7d9aaa5c8dc1a3a.gif')"
            section.style.backgroundRepeat="no-repeat"
            section.style.backgroundPosition="center"
            
          lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">SOORY! You LOS!</p>';
        } else if ((user.innerHTML = comp.innerHTML)) {
            section.style.backgroundImage="url(https://media1.giphy.com/media/LqrvwdcH813d7vgUqZ/giphy.gif) "
            section.style.backgroundRepeat="no-repeat"
            section.style.backgroundPosition="center"
            lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">IT IS DRAW! PLAY AGIN!</p>'
        //   lett.innerHTML = "It is a draw. 🤝<br>Try to win";
        }
        style.display = "block";
        
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