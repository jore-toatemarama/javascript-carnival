// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let images = document.getElementsByClassName('inflate-an-image')

let unicorns = [
  { name: '1', inflation: 0 },
  { name: '2', inflation: 0 },
  { name: '3', inflation: 0 },
]

for (let i = 0; i < images.length; i++) {
  images[i].onclick = inflateHorn
}

function inflateHorn(img) {
  let selectedImg = img.target
  let selectedUni = unicorns.find((unicorn) => unicorn.name == selectedImg.id)
  if (selectedUni.inflation === 0) {
    selectedImg.src = './images/unicorn-1.png'
  } else if (selectedUni.inflation === 1) {
    selectedImg.src = './images/unicorn-2.png'
  } else if (selectedUni.inflation === 2) {
    selectedImg.src = './images/unicorn-3.png'
  } else if (selectedUni.inflation === 3) {
    alert('Unicorn Number ' + selectedUni.name + ' says thank you!')
  }

  if (selectedUni.inflation < 3) {
    selectedUni.inflation++
  }
}
console.log('Inflate The Unicorn!')
