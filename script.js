const res = document.querySelector('#res')

function insert(num) {
  res.innerHTML += num
}

function clean() {
  res.innerHTML = ''
}

function back() {
  const resultado = document.getElementById('res').innerHTML
  document.getElementById('res').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

function calculate() {
  const resultado = document.getElementById('res').innerHTML
  if (resultado) {
    res.innerHTML = eval(resultado)
  }
}
