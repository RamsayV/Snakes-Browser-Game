




function init() {

    let snakeArr = [54, 53, 52]
    let snakeDirection= 1


    // ! Variables and Elements
    
    // ? Elements
    //CREATE GRID
    const grid = document.querySelector(".grid")
    
    
    
    
    // ? Variables
    // board config
    const width = 10
    const height = 10
    const cellCount = width * height
    let cells = []
    
    // charac config
    
    const startingPosition = 54
    let currentPosition = startingPosition
    
    
    
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
    
    //? ADD Snake CLASS
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
    //?  Handle MOvement
    
    function handleMovement (event) {
        console.log(event.keyCode)
        const key = event.keyCode
        const up = 38
        const down = 40
        const left = 37
        const right = 39
       // remove cat from prev pos b4 update new pos
       
       removeSnake()
       
        // check which key was pressed and excute code
        if (key === up && snakeDirection !== 10 ) {
            console.log("up")
            snakeDirection = -10
            snakeArr.pop()
            snakeArr.unshift(snakeArr[0]+snakeDirection)
        } else if (key === down && snakeDirection !=- -10) {
            console.log('down')
            snakeDirection= +10
            snakeArr.pop()
            snakeArr.unshift(snakeArr[0]+snakeDirection)
        } else if (key === left && snakeDirection !== 1 ) {
            snakeDirection= -1
            snakeArr.pop()
            snakeArr.unshift(snakeArr[0]+snakeDirection)
            console.log('left')
        } else if (key === right && snakeDirection !== -1) {
            snakeDirection= 1
            snakeArr.pop()
            snakeArr.unshift(snakeArr[0]+snakeDirection)
            console.log('right')
            
        } else {
            console.log ('Invalid key')
        }
      
        addSnake(snakeDirection)
    }
    
    
    
    //! Events
    document.addEventListener('keyup', handleMovement)
    //! pAge Loads
    createGrid()
    
    }
    
    window.addEventListener('DOMContentLoaded', init)