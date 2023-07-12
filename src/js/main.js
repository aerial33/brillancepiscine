export const navElement = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const navBtn = document.getElementById("menu")
		const menuBar = document.querySelector('[role="menubar"]')
		const header = document.querySelector("header")
		const dropdownBtn = document.getElementById("dropdown-btn")
		const dropdown = document.querySelector('[role="listbox"]')
		const navLinks = document.querySelectorAll("[data-navLink]")

		window.addEventListener("scroll", () => {
			const isScrolled = window.pageYOffset > 20
			header.classList.toggle("backdrop-blur-lg", isScrolled)
		})

		navBtn.addEventListener("click", () => {
			menuBar.classList.toggle("hidden")
		})
		dropdownBtn.addEventListener("click", e => {
			// dropdown.classList.toggle("hidden")
			e.preventDefault()
			dropdown.classList.toggle("hidden")
			e.stopPropagation()
		})

		document.addEventListener("click", () => {
			dropdown.classList.add("hidden")
		})

		navLinks.forEach(link => {
			if (link.getAttribute("href") === window.location.pathname) {
				link.setAttribute("aria-current", "page")
			}
		})
	})
}

export const animateLoading = () =>{
	const sliders = document.querySelectorAll('.slide-in')
	const faders = document.querySelectorAll(".fade-in")

	const appearOptions = {
		threshold: 0,
		rootMargin: "0px 0px 0px 0px"
	}

	const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting){
				return
			} else {
				entry.target.classList.add('appear')
				appearOnScroll.unobserve(entry.target)
			}
		})
	}, appearOptions)

	faders.forEach(fade => {
		appearOnScroll.observe(fade)
	})

	sliders.forEach(slide => {
		appearOnScroll.observe(slide)
	})
}

export const carousel = () => {
	const carousel = document.querySelector('.carousel__items')
	const slides = [...carousel.children]
	const buttonsCarousel = document.querySelectorAll('[data-carousel-button]')
	
	const slideWidth = slides[0].getBoundingClientRect().width
	
	
	// arrange the slides 
	slides[0].classList.add('current-slide')
	const setSlidePosition = (slide, index) => {
		slide.style.left = `${slideWidth * index}px`
	}
	slides.forEach(setSlidePosition)


	// function to move slides
	const moveToSlide = (item, currentSlide, targetSlide) => {
		if (targetSlide === null) {
			// Définir le targetSlide sur la première slide
			targetSlide = slides[0];
		}
		// Vérifier si le targetSlide est undefined (première slide)
		if (targetSlide === undefined) {
			// Définir le targetSlide sur la dernière slide
			targetSlide = slides[slides.length - 1];
		}
		item.style.transform = `translateX(-${targetSlide.style.left})`
		currentSlide.classList.remove('current-slide')
		targetSlide.classList.add('current-slide')
	}

	// When slide move to left or right
	buttonsCarousel.forEach(button => {
		button.addEventListener('click', () => { 
			const currentSlide = carousel.querySelector('.current-slide')
			const nextSlide = currentSlide.nextElementSibling
			const prevSlide = currentSlide.previousElementSibling
			button.dataset.carouselButton === 'next' ? 	
				moveToSlide(carousel, currentSlide, nextSlide)
			: moveToSlide(carousel, currentSlide, prevSlide)
		})
	})

}