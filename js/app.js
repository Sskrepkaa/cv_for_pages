document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	
	const isMobile = window.innerWidth < 768;
	if (isMobile) {
		document.querySelectorAll('[gradient-evolve]').forEach(el => {
			el.style.background = 'linear-gradient(255deg, #facb0e, #f06ba8 30%, #78bae6 65%, #fff)';
		});
		// Отключаем ::before анимацию через класс
		document.querySelectorAll('[gradient-evolve]').forEach(el => {
			el.classList.add('no-animate');
		});
	}

	// Scroll variable
	window.addEventListener("scroll", () => {
		document.documentElement.style.setProperty("--scrollTop", `${window.scrollY}px`);
	});

	if (!isMobile) {
		ScrollSmoother.create({
			wrapper: ".wrapper",
			content: ".content",
			smooth: 1,
			effects: true,
			smoothTouch: 0.1,
		});
	} else {
		// На мобиле только effects без smooth
		ScrollSmoother.create({
			wrapper: ".wrapper",
			content: ".content",
			smooth: 0,
			effects: false,
			smoothTouch: 0,
		});
	}

	// Animations
	// Дополнительные GSAP анимации
	const containerRef = document.querySelector(".containerRef");
	const overlayRef = document.querySelector(".overlayRef");

	function random(min, max) {
		return Math.random() * (max - min) + min;
	  }


		// Устанавливаем начальные состояния

		gsap.set("#hero-cross-group", { x: "50vw", scale: 0});
	

	gsap.to("#hero-cross-group", {
		// scrollTrigger: {
		// 	trigger: "#hero-reveal-section",  // секция, которую пинить
		// 	start: "top center",            // когда верх секции дойдет до верха viewport
		// 	end: 'top top',
		// 	scrub: true,
		// 	},
		y: "50vh",
		rotation: 45,
		scale: 3,
		transformOrigin: "center center",
		duration: 1,
		ease: "power2.out",
		delay: 1,                          // ← вместо scrollTrigger
		onComplete: () => {
			// Шаг 2: после появления сразу запускаем раскрытие
			tl1.play();
		}
	})
//gsap.set("#hero-cross-group", {  y: "50vh", rotation: 45, scale: 3,});

// Создаём общий timeline
let tl1 = gsap.timeline({
   paused: true 
});

// 1️⃣ Крестик и текст двигаются почти вместе
tl1.to("#hero-cross-group", {
  scale: 50,
  rotation: 240,
  ease: "power4.out",
  transformOrigin: "center center",
  duration: 4
}, 0) // "0" означает — начинать одновременно с первой анимацией
  // Текст появляется ближе к концу раскрытия
  .to(".hero_allTitle", {
      opacity: 1,
      ease: "power2.out",
      duration: 0.8,
  }, 1.6)  // ← старт через 1.8s после начала tl1 (когда крестик уже почти раскрылся)
  .to(".hero__comp_TEST", {
      opacity: 1,
      ease: "power2.out",
      duration: 0.8,
  }, 2.0);
//---------------------
	// Анимация появления заголовка
	// gsap.fromTo('.hero_allTitle', { opacity: 1 }, {
	// 	opacity: 0,
	// 	scrollTrigger: {
	// 	trigger: '.hero_allTitle',
	// 	start: "center top",
    //   	end: "+=800",
	// 	scrub: true,
	// 	markers: true
	// 	},
	// })
	gsap.fromTo('.hero__comp', { 
		scale: 0.8,
		x:0
	}, {
		scale: 1.4,
		x: 600,
		scrollTrigger: {
			trigger: '.secHero',
			start: 'top top',
			end: '+=500',
			scrub: 1
		}
	})
	gsap.fromTo('.hero__comp', { 
		opacity: 1,
	}, {
		opacity: 0,
		scrollTrigger: {
		trigger: '.hero__comp',
		start: 'top top',
		//markers: true,
		end: '+=400',
		scrub: 1
		}
	})
	gsap.to(overlayRef, {
		clipPath: "inset(0% 100% 0% 0%)", // открываем справа налево
		ease: "power2.inOut",
		scrollTrigger: {
			trigger: containerRef,
			start: "top top",
			end: "+=100%",
			ease: "none",
			//markers: true,
			scrub: 1,
			pin: true,
		},
	})
	gsap.to('.circle__image', {
		
		scrollTrigger: {
			trigger: '.sec__menu',
			start: 'top center',
			end: '+=100%',
			scrub: 1
		},
		rotation: 480,
	})
	gsap.to(".pin_item", {
		scrollTrigger: {
			trigger: '.pin_item',
			start: 'bottom bottom',
			end: '+=100%',
			scrub: 1,
			pin:true,
		},
	})
	gsap.fromTo(".first_text", {
		opacity: 0,
		y: 0,
	}, {
		opacity: 1,
		scrollTrigger: {
		trigger: '.first_text',
		start: 'top top',
		end: '+=100',
		scrub: 1,
		
		}
	})
	gsap.fromTo(".first_text", {
		
		}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.first_text',
			start: 'center 40%',
			end: '+=100',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_text", {
		opacity: 0,
		y: 0,
	}, {
		opacity: 1,
		scrollTrigger: {
		trigger: '.second_text',
		start: 'top top',
		end: '+=100',
		scrub: 1,
		
		}
	})
	gsap.fromTo(".second_text", {
		
		}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.second_text',
			start: 'center 40%',
			end: '+=100',
			scrub: true,
			//markers: true,
		}
	})

	// CACTUS PIN SECTION START
	
	gsap.to(".pin_section_cactus", {
		
		scrollTrigger: {
		trigger: '.pin_section_cactus',
		start: 'top top',
		end: '+=200%',
		pin: true,
		//markers: true,
		}
	})
	gsap.fromTo(".first_s", {
		opacity: 0,
		}, {
		opacity: 1,
		scrollTrigger: {
			trigger: '.first_s',
			start: 'top top',
			end: '+=30%',
			scrub: 1,
		}
	})
	gsap.fromTo(".first_s", {
		}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.first_s',
			start: '60% top',
			end: '+=30%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_s", {
		opacity: 0,
		}, {
		opacity: 1,
		scrollTrigger: {
			trigger: '.first_s',
			start: '100% top',
			end: '+=30%',
			scrub: 1,
		}
	})
	gsap.fromTo(".cactus_sec_img2", {
		y: 0,
		}, {
		y: 80,
		scrollTrigger: {
			trigger: '.first_s',
			start: '100% top',
			end: '+=100%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_sf", {
		opacity: 0,
		x: 50,
		y: -30,
		rotation: -45,
		}, {
		opacity: 1,
		x: 0,
		y: 0,
		rotation: 0,
		ease: "power4.out",
		scrollTrigger: {
			trigger: '.first_s',
			start: '120% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_sf", {
		x: 0,
		y: 0,
		rotation: 0,
		}, {
		opacity: 0,
		x: -30,
		y: 50,
		rotation: 25,
		ease: "power4.in",
		scrollTrigger: {
			trigger: '.first_s',
			start: '160% top',
			end: '+=40%',
			scrub: 1,
		}
	})


	gsap.fromTo(".second_sl", {
		opacity: 0,
		x: 30,
		y: 50,
		rotation: 25,
		
		}, {
		opacity: 1,
		x: 0,
		y: 0,
		rotation: 0,
		ease: "power4.out",
		scrollTrigger: {
			trigger: '.first_s',
			start: '125% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_sl", {
		x: 0,
		y: 0,
		rotation: 0,
		}, {
		opacity: 0,
		x: -30,
		y: -50,
		rotation: -25,
		ease: "power4.in",
		scrollTrigger: {
			trigger: '.first_s',
			start: '165% top',
			end: '+=35%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_sl2", {
		opacity: 0,
		x: -30,
		y: 50,
		rotation: 25,
		
		}, {
		opacity: 1,
		x: 0,
		y: 0,
		rotation: 0,
		ease: "power2.out",
		scrollTrigger: {
			trigger: '.first_s',
			start: '120% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_sl2", {
		x: 0,
		y: 0,
		rotation: 0,
		}, {
		opacity: 0,
		x: 30,
		y: -50,
		rotation: -25,
		ease: "power4.in",
		scrollTrigger: {
			trigger: '.first_s',
			start: '160% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_stree", {
		x: -50,
		y: 10,
		rotation: 10,
		opacity: 0,
		}, {
		x: 0,
		y: 0,
		rotation: 0,
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: '.first_s',
			start: '120% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_stree", {
		x: 0,
		y: 0,
		rotation: 0,
		}, {
		x: 50,
		y: -10,
		rotation: -10,
		opacity: 0,
		ease: "power2.in",
		scrollTrigger: {
			trigger: '.first_s',
			start: '160% top',
			end: '+=40%',
			scrub: 1,
		}
	})
	gsap.fromTo(".second_s", {
		}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.first_s',
			start: '170% top',
			end: '+=30%',
			scrub: 1,
		}
	})
	gsap.to(".cactus",  {
		rotate: 75,
		duration: 3,
		x: '3vw',
		y: '2vh',
		scrollTrigger: {
		trigger: '.first_s',
		start: '145% top',
		end: '+=20%',
		//markers: true,
		scrub: 1,
		}
	});
	// -- CACTUS PIN SECTION END

// // задаём стартовую позицию крестика (внизу, маленький)
// gsap.set("#cross-group", {
//     scale: 0.2,
//     yPercent: 100,
//     rotation: 0,
//     transformOrigin: "center center",
//     transformBox: "fill-box"
//   });

//   // создаём анимацию
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#reveal-section",
//       start: "top bottom",
//       end: "center center",
//       scrub: true,
//       once: true
//     }
//   });

//   // шаг 1: поднимаем крест до середины
//   tl.to("#cross-group", {
//     yPercent: 0,
//     ease: "power3.out",
//     duration: 1
//   })
//   // шаг 2: увеличиваем и вращаем против часовой стрелки
//   .to("#cross-group", {
//     scale: 20,
//     rotation: -180,
//     ease: "power4.out",
//     duration: 2
//   });

	gsap.set("#cross-group", { x: "50vw", scale: 0});
	

	gsap.to("#cross-group", {
		scrollTrigger: {
			trigger: "#last-reveal-section",  // секция, которую пинить
			start: "top center",            // когда верх секции дойдет до верха viewport
			end: 'top top',
			scrub: true,
			},
		y: "50vh",
		rotation: 45,
		scale: 3,
		transformOrigin: "center center",
		duration: 1,
		ease: "power2.out",
	})


	// Устанавливаем начальные состояния
gsap.set("#cross-group", { y: "50vh", rotation: 45, scale: 3,});
gsap.set("#howabout_text", { opacity: 0,  x: "30vw" });
gsap.set("#together_text", { opacity: 0, scale: 0.8, letterSpacing: "0.6em" });
gsap.set(".together_all", { opacity: 0 });


// Создаём общий timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#last-reveal-section",
    start: "top top",
    end: "bottom+=300 top",
    scrub: 1,
    pin: true,
  }
});

// 1️⃣ Крестик и текст двигаются почти вместе
tl.to("#cross-group", {
  scale: 50,
  rotation: 240,
  ease: "power4.out",
  duration: 4
}, 0) // "0" означает — начинать одновременно с первой анимацией

.to("#howabout_text", {
  x: "0vw",
  opacity: 1,
  ease: "power2.out",
  duration: 1.5
}, 0) // "0.2" — с лёгким смещением относительно первой

// 2️⃣ После них появляется "together"
.to("#together_text", {
  opacity: 1,
  scale: 1,
  letterSpacing: "0em",
  ease: "power4.out",
  duration: 1.2
}, ">-0.5") // ">-0.3" означает — начинать сразу после предыдущей, с лёгким наложением

.to(".together_all", {
	opacity: 1,
	y: 30,
	ease: "power4.out",
	duration: 1.2
  }, ">-0.5");



	// gsap.fromTo("#cross-group", {}, {
	// 	scrollTrigger: {
	// 		trigger: "#reveal-section",
	// 		start: "top top",
	// 		end: "bottom+=200 top",
	// 		scrub: true,
	// 		pin: true,
	// 	},
	// 	scale: 45,
	// 	rotation: 260,
	// 	transformOrigin: "center center",
	// 	duration: 2,
	// 	ease: "power4.out",
	// })

	// gsap.from("#howabout_text", {
	// 	scrollTrigger: {
	// 		trigger: "#reveal-section",
	// 		start: "top top",
	// 		end: "+=200",
	// 		scrub: true,
	// 	},
	// 	x: "30vw",
	// 	ease: "power2.out"
	// })

	// gsap.fromTo("#together_text",
	// { opacity: 0, scale: 0.8, letterSpacing: "0.2em" },
	// {
	// 	opacity: 1,
	// 	scale: 1,
	// 	letterSpacing: "0em",
	// 	duration: 1.2,
	// 	ease: "power4.out",
	// 	scrollTrigger: {
	// 		trigger: "#reveal-section",
	// 		start: "center center",
	// 		toggleActions: "play none none reverse",
	// 	}
	// }
	// );


		ScrollTrigger.refresh();
	});



  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-btn");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.disabled = true;
    button.textContent = "Sending…";

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/mldoqnlp", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      button.textContent = "Sent ✓";
	  button.classList.remove("bg-white/70");
	  button.classList.add("bg-emerald-200");
      status.textContent = "Thanks for reaching out!";
      status.classList.remove("opacity-0");
      status.classList.add("opacity-100");
      form.reset();
    } else {
      button.disabled = false;
      button.textContent = "Submit";
      status.textContent = "Something went wrong. Try again.";
      status.classList.remove("opacity-0");
      status.classList.add("opacity-100");
    }
  });





  const comp = document.querySelector('.hero__comp_TEST');
const section = document.querySelector('#hero-reveal-section');

section.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    
    // Нормализуем позицию от -1 до 1
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    
    gsap.to(comp, {
        x: x * 30,   // максимум 30px по горизонтали
        y: y * 20,   // максимум 20px по вертикали
        duration: 0.8,
        ease: "power2.out",
    });
});

// Возврат на место когда курсор ушёл
section.addEventListener('mouseleave', () => {
    gsap.to(comp, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
    });
});

if (!isMobile) {
    section.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    
    // Нормализуем позицию от -1 до 1
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    
    gsap.to(comp, {
        x: x * 30,   // максимум 30px по горизонтали
        y: y * 20,   // максимум 20px по вертикали
        duration: 0.8,
        ease: "power2.out",
    });
});

// Возврат на место когда курсор ушёл
section.addEventListener('mouseleave', () => {
    gsap.to(comp, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
    });
});
}



let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 90%',
				end: 'top 40%',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 95%',
				end: 'top 45%',
				scrub: true
			}
		})
	})


