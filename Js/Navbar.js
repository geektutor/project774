//nav bar.......................................

const nav = document.getElementsByClassName('nav')[0]
const toggle = document.getElementsByClassName('toggle-icons')[0]

toggle.onclick = function () {
  'use strict'

  nav.classList.toggle('collapse')
}
