const rock = document.getElementById("Rock").value;


const paper = document.getElementById("Paper").value;



const scisor = document.getElementById("Scicor").value;
const imgbut1 = document.getElementById("butimg1");

const imgbut2 = document.getElementById("butimg2");
const res = document.getElementById("Result");

const rest = document.getElementById("RESET");

const wins = document.getElementById("Wins");
const ties = document.getElementById("ties");
const los = document.getElementById("loses");






let computer = '';
let message = '';   
let choice = '';



let win = 0;
let loss = 0;
let tie = 0;






function st(text) {
generate();


        if(text === 'Rock'){
        
         
        if(choice === 'Rock'){
            message = 'It\'s A Tie!';
            
        }
        else if (choice === 'Paper'){
            message = 'You Loose!';

        }
        else if(choice === 'Scicor'){
            message = 'You Win!';
        }

        imgbut1.innerHTML = `<img src="rock-removebg-preview.png">`;
    }
    else if(text === 'Paper'){
      

        if(choice === 'Rock'){
            message = 'You Win!';
        }
        else if (choice === 'Paper'){
            message = 'It\'s A Tie!';

        }
        else if(choice === 'Scicor'){
            message = 'You Loose!';
        }
        imgbut1.innerHTML = `<img src="paper-removebg-preview-removebg-preview.png">`;
    }
    else if(text === 'Scicor'){
     
        
        if(choice === 'Rock'){
            message = 'You Loose!';
        }
        else if (choice === 'Paper'){
            message = 'You Win!';

        }
        else if(choice === 'Scicor'){
            message = 'It\'s A Tie!';
        }

        imgbut1.innerHTML = `<img src="scicor-removebg-preview.png">`;
    }

        res.textContent = message;



            //debugging men
    console.log(`You Choose ${text}. The Computer Choose ${computer}. ${message}`);

message === 'You Win!' ? win++ : message === 'You Loose!' ? loss++ : message === 'It\'s A Tie!' ? tie++: '';


rest.onclick = function (){
    win = 0;
    loss= 0;
    tie= 0;

    wins.textContent = win;
los.textContent = loss;
ties.textContent = tie;
window.alert('Reset Succesfuly');

    
}


wins.textContent = win;
los.textContent = loss;
ties.textContent = tie;





    }




    function generate(){
            
        let ran2 = Math.random();
        let inarr = [];
        if(ran2 >= 0 && ran2 < 1/3){
            computer = `<img src="rock-removebg-preview.png">`;
            choice = 'Rock';
        
            
        }
        else if(ran2 >= 1/3 && ran2< 2/3){
            computer = `<img src="scicor-removebg-preview.png">`;
            choice = 'Scicor';
          


        }
        else if(ran2 >= 2/3 && ran2 <1){
            computer =  `<img src="paper-removebg-preview-removebg-preview.png">`;
            choice = 'Paper';
         

        }

        for(let i = 0;i<1;i++){
            let ran2 = Math.random();
            inarr.push(computer);
        
        }
        imgbut2.innerHTML = inarr;
    }   




