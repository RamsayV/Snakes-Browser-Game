

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
    let lastDirection = right
 
    
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
    
    //? ADD Snake 
    function addSnake(position){
    snakeArr.forEach(snakeIndex => {
        cells[snakeIndex].classList.add('snake')
    });
    }
    

     // ?REMOVE Snake CLASS
     function removeSnake(){
        console.log('Snake remove')
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
   

        //?  Handle MOvement
    
     setInterval(handleMovement, 200)

    function handleMovement (event) {
        let key= null
        if(event){
        key = event.keyCode
        }else{
        key = lastDirection

        }
       console.log(event)
        
       // remove snake from prev pos b4 update new pos
       
       removeSnake()
       
        // check which key was pressed and excute code
        if (key === up && snakeDirection !== 10 && snakeArr[0] >= width ) {
            console.log("up")
            snakeDirection = -10
            snakeArr.unshift(snakeArr[0] + snakeDirection)
            if (!cells[snakeArr[0]].classList.contains('food')){
                snakeArr.pop()
                } else{
                    removeFood()
                    generateFood()
                    }
                    lastDirection= up
        } else if (key === down && snakeDirection !== -10 && snakeArr[0] + width <= cellCount -1 ) {
            console.log('down')
            snakeDirection= 10
            snakeArr.unshift(snakeArr[0]+snakeDirection)
            if (!cells[snakeArr[0]].classList.contains('food')){
                snakeArr.pop()
                } else{
                    removeFood()
                    generateFood()
                    }
                    lastDirection= down
        } else if (key === left && snakeDirection !== +1 && snakeArr[0] % width != 0 ) {
            snakeDirection= -1
            snakeArr.unshift(snakeArr[0]+snakeDirection)
            if (!cells[snakeArr[0]].classList.contains('food')){
                snakeArr.pop()
                } else{
                    removeFood()
                    generateFood()
                    }
                    lastDirection= left
        } else if (key === right && snakeDirection !== -1 && snakeArr[0] % width != width -1) {
            snakeDirection= 1
            snakeArr.unshift(snakeArr[0]+snakeDirection)
            console.log('right')
            if (!cells[snakeArr[0]].classList.contains('food')){
                snakeArr.pop()
                } else{
                    removeFood()
                    generateFood()
                    }
                    lastDirection= right
            
        } else {
            console.log ('Invalid key')
        }
      
        addSnake(snakeDirection)
}
createGrid()
generateFood()
    
    //! Events
    document.addEventListener('keyup', handleMovement)
    //! pAge Loads
    
    }
    
    window.addEventListener('DOMContentLoaded', init)