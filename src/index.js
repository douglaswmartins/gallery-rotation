import './styles.css'

let indexImg = 0;
setValueIndex(indexImg)

const btnPrev = document.getElementById('prevBtn')
btnPrev.addEventListener('click', handlePreviousClick)

const btnNext = document.getElementById('nextBtn')
btnNext.addEventListener('click', handleNextClick)

function handlePreviousClick() {
  --indexImg
  setValueIndex(indexImg)
}

function handleNextClick() {
  ++indexImg
  setValueIndex(indexImg)
}

function setValueIndex(i) {
  document.documentElement.style.setProperty('--index-img', i)
}
