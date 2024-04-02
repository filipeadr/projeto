function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar teg img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./avatar.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./avatar.2.jpg")
  }
}
