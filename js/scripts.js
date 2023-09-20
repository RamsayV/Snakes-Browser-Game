

function init() {
   // ! Variables and Elements
    let snakeArr = [54, 53, 52]
    let snakeDirection= 1
    const width = 10
    const height = 10
    const cellCount = width * height
    let cells = []
    const startingPosition = 54
    let currentPosition = startingPosition
    const startBtn = document.createElement('button')
    const up = 38  
    const down = 40
    const left = 37
    const right = 39
    let score = 0
    let scoreboard = document.getElementById('ScoreBoard')
    let lastDirection 
    const playAgain = document.createElement('button')
    playAgain.innerText="Play Again?"
    let timer= null
    
    

    playAgain.addEventListener('click', () => {
        // reload the page
        location.reload();
    });


    // ? Elements
    //CREATE GRID
    const grid = document.querySelector(".grid")
    
    //! Functions
    
    //CREATE GRID CELLS()
    function createGrid(){
    //Use the cellCount to create our grid cells
    for (let i = 0; i < cellCount; i++){
        //create div cell
        const cell = document.createElement('div')
        
        // add index to div element
        cell.innerText = i
        
        //add index as attribute
        cell.dataset.index  = i
        // Add the height and widh to each grid cell (div)
        cell.style.height = `${100 / height}%`
        cell.style.width = `${100 / width}%`
        
        
        //add ceel to grid
        grid.appendChild(cell)
        // Add newly created div cell to celss array
        cells.push(cell)
        }
        // add cat charac to start pos
    addSnake(startingPosition)
    }
    

    //? Game Over Function

 function gameOver() {
 const currentX = snakeArr[0] % width
 const currentY = Math.floor(snakeArr[0] / width)
 console.log(snakeArr);
 console.log(currentX, currentY);
   if (
    snakeArr[0] < width && snakeDirection === -10 ||
    currentX === 9 && snakeDirection === 1 ||
    currentX === 0 && snakeDirection === -1 ||
    currentY === 9 && snakeDirection === 10 ||
    //currentY === 0 && snakeDirection === -10 ||
    (cells[snakeArr[0] + snakeDirection].classList.contains('snake'))
    ){
    
  clearInterval(timer)
    grid.appendChild(playAgain)
    return
    }
   }





    //? ADD Snake 
    function addSnake(){
    snakeArr.forEach(snakeIndex => {
        cells[snakeIndex].classList.add('snake')
    });
    }
    

     // ?REMOVE Snake CLASS
     function removeSnake(){
        snakeArr.forEach(snakeIndex => {
            cells[snakeIndex].classList.remove('snake')
        });
    }
    let foodLocation = Math.floor(Math.random() * cellCount)
    function generateFood() {
        foodLocation = Math.floor(Math.random() * cellCount)
        cells[foodLocation].classList.add('food')
      
    }
    
    function removeFood() {
        
        cells[foodLocation].classList.remove('food')
      
    }
   

        //?  interval movement
   timer = setInterval(handleMovement, 1000)

      //?  Handle MOvement
     function handleMovement (event) {

        let key= null
        if(event){
        key = event.keyCode
        }else{
        key = lastDirection
         }
       // remove snake from prev pos b4 update new pos
       removeSnake()
       // foodScore 
  function foodScore () {
        snakeArr.unshift(snakeArr[0] + snakeDirection)
        if(!cells[snakeArr[0]].classList.contains('food')){
            snakeArr.pop()
            } else{
                removeFood()
                generateFood()
                score+= 10
                scoreboard.innerText= (`Score: ${score}`)
                }}
         
                // check which key was pressed and excute code
        if (key === up && snakeDirection !== 10 ) {
            snakeDirection = -10
            foodScore ()
           lastDirection= up
        } else if (key === down && snakeDirection !== -10 && snakeArr[0] + width <= cellCount -1 ) {
            snakeDirection= 10
            foodScore()
            lastDirection= down
        } else if (key === left && snakeDirection !== +1 && snakeArr[0] % width != 0 ) {
            snakeDirection= -1
            foodScore()
            lastDirection= left
        } else if (key === right && snakeDirection !== -1 && snakeArr[0] % width != width -1) {
            snakeDirection= 1
            foodScore()
             lastDirection= right
             } else {
                
        }
    
        addSnake(snakeDirection)
    
        gameOver()
    
}
createGrid()
generateFood()
    
    //! Events
    document.addEventListener('keyup', handleMovement)
    //! pAge Loads

    }
    
    window.addEventListener('DOMContentLoaded', init)

 