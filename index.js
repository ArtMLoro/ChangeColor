
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// In the click
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // Applying color to the background
    color.textContent = colors[randomColor]
})

// Create a randoms numbers
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}