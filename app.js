const menuToggle = document.querySelector('.toggle')
const hero = document.querySelector('.hero')
const bars = document.querySelector('.fa-bars')

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active')
	hero.classList.toggle('active')
	// bars.classList.add('fa-bars')
	bars.classList.remove('fa-bars')

	bars.classList.add('fa-times')
})
