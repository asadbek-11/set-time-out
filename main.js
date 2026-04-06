let loginForm = document.getElementById("loginForm")
let input = document.querySelector("#input")
let addBtn = document.getElementById("add-btn")
let ul = document.querySelector("#lists")
let p = document.querySelector("#list")


loginForm.addEventListener("submit", (e) => {

  e.preventDefault()

  let value = input.value.trim()

  if (value === "") {
    list.textContent = "Iltimos to'ldiring..."

    setTimeout(()=> {
      list.textContent = ""
    }, 3000)

  } else {
      let li = document.createElement("li")
      let button = document.createElement("button")
      button.textContent = "🗑️"
      li.textContent = input.value
      li.appendChild(button)
      ul.appendChild(li)
      input.value = ""
  }
})

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove()
  }
})



