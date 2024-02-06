function togglemode() {
  const html = document.documentElement
  const switchButton = document.getElementById("switch")
  const img = document.querySelector("#profile img")

  // Toggle da classe 'light' no elemento HTML
  html.classList.toggle("light")

  // Mover o botão para a direita quando a classe 'light' estiver ativa
  if (html.classList.contains("light")) {
    switchButton.style.transition = "left 0.3s ease" // Transição suave
    switchButton.style.left = "32px" // Ajustar se precisar
  } else {
    switchButton.style.transition = "left 0.3s ease" // Transição suave
    switchButton.style.left = "0" // Volta para a posição de antes
    img.setAttribute("src", "./assets/avatar.png")
  }
}

