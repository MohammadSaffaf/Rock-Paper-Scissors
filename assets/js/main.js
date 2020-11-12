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
//runde funktion
function manyRunde() {
 let round5 = document.getElementById("funf");
let round10 = document.getElementById("zehn");
let round15 = document.getElementById("funfzehn");
valuee=0
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


    //scissors funktion
    scissors.addEventListener("click", () => {
        
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        ++mall;
        if (mall < manyRunde()) {
            roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
            roundMin.innerHTML = mall++;
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        endResult()
        }
        if (x == 0) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        lett.innerHTML = `<p> SCISSORES<span>${name}</span> PAPER <span>[comp]</span> YOU WIN</p> `;
        } else if (x == 1) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        lett.innerHTML = `<p> SCISSORES<span>[user]</span> ROCK <span>[comp]</span> YOU LOSE</p> `;
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        lett.innerHTML = `<p>It was a DRAW. You both chose SCISSORES.</p>`
         }
       });
       //Rock funktion
       rock.addEventListener("click", () => {
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        console.log(x);
        ++mall;
        if (mall < manyRunde()) {
          roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
          roundMin.innerHTML = mall++;
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        endResult()
        }
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        lett.innerHTML = `<p> ROCK<span>[user]</span> PAPER <span>[comp]</span> YOU LOSE</p> `;
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
        lett.innerHTML = `<p>It was a DRAW. You both chose ROCK.</p>`
        } else {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`;
        lett.innerHTML = `<p> ROCK<span>[user]</span> SCISSORS <span>[comp]</span> YOU WIN</p> `;
        }
      });
      //Paper funktion
      paper.addEventListener("click", () => {
        roundsMax.innerHTML = manyRunde();
        x = Math.floor(Math.random() * 3);
        console.log(x);
        ++mall;
        if (mall < manyRunde()) {
          roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
          roundMin.innerHTML = mall++;
          show.style.display= "none"
          roundResult.style.display= "none"
          bilder.style.display="none"
        endResult()
        }
        if (x == 0) {
          user.innerHTML = `${mUser * 1}`;
          comp.innerHTML = `${++mComp}`;
        lett.innerHTML = `<p>It was a DRAW. You both chose PAPER.</p>`
        } else if (x == 1) {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${++mComp}`;
          lett.innerHTML = `<p> PAPER<span>[user]</span> ROCK <span>[comp]</span> YOU WIN</p> `;
        } else  {
          user.innerHTML = `${++mUser}`;
          comp.innerHTML = `${mComp * 1}`
        lett.innerHTML = `<p> PAPER <span>[user]</span> SCISSORS <span>[comp]</span> YOU LOSE</p>`
        } 
      });

      function endResult() {
        if (user.innerHTML > comp.innerHTML) {
            section.style.backgroundImage="url('https://media2.giphy.com/media/jof1Ck9hcZIOlQyzDL/source.gif')"
            
          lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">Congratulations! You win!</p>'
        } else if (user.innerHTML < comp.innerHTML) {
            section.style.backgroundImage="url('https://i.pinimg.com/originals/93/94/01/939401aab667fb28f7d9aaa5c8dc1a3a.gif')"
            section.style.backgroundRepeat="no-repeat"
            section.style.backgroundPosition="center bottom"
            section.style.height="100vh"
          lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">SOORY! You LOS!</p>';
        } else if ((user.innerHTML = comp.innerHTML)) {
            section.style.backgroundImage="url(https://media1.giphy.com/media/LqrvwdcH813d7vgUqZ/giphy.gif) "
            section.style.backgroundRepeat="no-repeat"
            section.style.backgroundPosition="center bottom"
            section.style.height="100vh"
            lett.innerHTML = '<p style="font-size: 60px; color: yellow; font-family: Cabin Sketch, cursive;">IT IS DRAW! PLAY AGIN!</p>'
        }
        style.display = "block";
      }
      
   // restart funktion
function restart() {
    setTimeout(function () {
        location.reload()
    })
}