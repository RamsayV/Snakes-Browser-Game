

function init() {
    // ! Variables and Elements
    let snakeArr = [54, 53, 52]
    let snakeDirection = 1
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
    const playAgain = document.createElement('button')
    playAgain.innerText = "Play Again?"
    let timer = null
    let foodLocation = Math.floor(Math.random() * cellCount)



    playAgain.addEventListener('click', () => {
        // reload the page
        location.reload();
    });


    // ? Elements
    //CREATE GRID
    const grid = document.querySelector(".grid")

    //! Functions

    //CREATE GRID CELLS()
    function createGrid() {
        //Use the cellCount to create our grid cells
        for (let i = 0; i < cellCount; i++) {
            //create div cell
            const cell = document.createElement('div')

            // add index to div element
            

            //add index as attribute
            cell.dataset.index = i
            // Add the height and widh to each grid cell (div)
            cell.style.height = `${100 / height}%`
            cell.style.width = `${100 / width}%`


            //add ceel to grid
            grid.appendChild(cell)
            // Add newly created div cell to celss array
            cells.push(cell)
        }

        addSnake(startingPosition)
    }


    //? Game Over Function
    //? ADD Snake 
    function addSnake() {
        const [snakeHead, ...snakeBody] = snakeArr
        cells[snakeHead].classList.add('snakeHead')
        snakeBody.forEach(snakeIndex => {
            cells[snakeIndex].classList.add('snake')
        });
    }


    // ?REMOVE Snake CLASS
    function removeSnake() {
        const [snakeHead, ...snakeBody] = snakeArr
        cells[snakeHead].classList.remove('snakeHead')
        snakeBody.forEach(snakeIndex => {
            cells[snakeIndex].classList.remove('snake')
        });
    }

    function generateFood() {
        foodLocation = Math.floor(Math.random() * cellCount)
        cells[foodLocation].classList.add('food')
        if(cells[foodLocation].classList.contains('snake', 'snakeHead')){
            removeFood()
            foodLocation = Math.floor(Math.random() * cellCount)
            cells[foodLocation].classList.add('food')

    }
}

    function removeFood() {
        cells[foodLocation].classList.remove('food')
    }

    //?  Handle MOvement
    function handleMovement(event) {
        const key = event.keyCode
        // remove snake from prev pos b4 update new pos
        removeSnake()
        // check which key was pressed and excute code
        if (key === up && snakeDirection !== 10) {
            snakeDirection = -10
            // lastDirection= up
        } else if (key === down && snakeDirection !== -10) {
            snakeDirection = 10
            //lastDirection= down
        } else if (key === left && snakeDirection !== +1) {
            snakeDirection = -1
            //lastDirection= left
        } else if (key === right && snakeDirection !== -1) {
            snakeDirection = 1
            // lastDirection= right
        }

        addSnake()
    }

    function foodScore() { 
        timer = setInterval(() => {
            removeSnake()
            const currentX = snakeArr[0] % width
            const currentY = Math.floor(snakeArr[0] / width)
            console.log(snakeArr);
            console.log(currentX, currentY);
            let snakeCollision = false
            for(let i = 1; i < snakeArr.length; i++){
                if((snakeArr[0] + snakeDirection) === snakeArr[i]){
                    snakeCollision = true
                    
                }

            }
            if (
                snakeCollision ||
                currentX === 9 && snakeDirection === 1 ||
                currentX === 0 && snakeDirection === -1 ||
                currentY === 9 && snakeDirection === 10 ||
                currentY === 0 && snakeDirection === -10 
            ) {

                clearInterval(timer)
                grid.appendChild(playAgain)
                return
            }
            if (!cells[snakeArr[0] + snakeDirection].classList.contains('food')) {
                snakeArr.pop()
            } else {
                removeFood()
                generateFood()
                score += 10
                scoreboard.innerText = (`Score: ${score}`)
            }
            snakeArr.unshift(snakeArr[0] + snakeDirection)
            addSnake()

        }, 1000)
    }
    foodScore()
    createGrid()
    generateFood()



    //! Events
    document.addEventListener('keyup', handleMovement)
    //! pAge Loads

}

window.addEventListener('DOMContentLoaded', init)

