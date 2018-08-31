document.addEventListener("DOMContentLoaded", function () {
  const NUM_OF_ROWS = 50// 75 looks good
  const NUM_OF_COLS = 100 // 170 looks good
  let table = document.getElementById("table")
  let tableColumn = document.getElementById("tableColumn")
  let color = document.getElementById(`colors`)

  blankGrid() // creates a blank grid
  table.addEventListener("click", gridClicked)

  function gridClicked(event) {
    if (event.target.classList.contains("off")) {
      event.target.classList.replace("off", "on")
      event.target.setAttribute("style", `background-color : ${color.value}`)
    } else {
      event.target.classList.replace("on", "off")
      event.target.setAttribute("style", "background-color: white")
    }
  }

  function blankGrid() {
    for (let i = 0; i < NUM_OF_ROWS; i++) {
      let row = document.createElement("tr")
      for (let j = 0; j < NUM_OF_COLS; j++) {
        let cell = document.createElement("td")
        cell.classList.add("off")
        row.appendChild(cell)
      }
      table.appendChild(row)
    }
  }
})
