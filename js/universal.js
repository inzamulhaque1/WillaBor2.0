// ! ----------------ABOUT US----------------------

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP or ScrollTrigger not loaded. Content will remain visible.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector("#about-us");
  const items = section.querySelectorAll(".animate-item");
  const treeImg = section.querySelector(".tree-img");
  const logImg = section.querySelector(".log-img");
  const bImg = section.querySelector(".b-img");

  gsap.fromTo(
    section,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%", 
        toggleActions: "play none none none",
        once: true
      }
    }
  );

  gsap.fromTo(
    items,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true
      }
    }
  );

  if (treeImg) {
    gsap.fromTo(
      treeImg,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }

  if (logImg) {
    gsap.fromTo(
      logImg,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }

  if (bImg) {
    gsap.fromTo(
      bImg,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }
});

// !------------------ Product Slider -----------------------

document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      title: "Wygodne łóżka",
      desc: "Po dniu na szlaku nie ma nic lepszego niż zanurzyć się w miękkiej pościeli. U nas śpi się błogo – jak w chmurze, tylko bliżej Tatr.",
      img: "./assets/img/p1.png",
      alt: "Wygodne łóżka"
    },
    {
      title: "Przytulna atmosfera",
      desc: "Idealne miejsce, by poczuć się jak w domu – ciepło, komfortowo i spokojnie.",
      img: "./assets/img/p2.png",
      alt: "Przytulna atmosfera"
    },
    {
      title: "Blisko natury",
      desc: "Otoczona zielenią, nasza willa pozwala się wyciszyć i odpocząć od zgiełku miasta.",
      img: "./assets/img/p3.png",
      alt: "Blisko natury"
    },
    {
      title: "Nowoczesne udogodnienia",
      desc: "Wszystko, czego potrzebujesz – szybkie WiFi, smart TV, wygodne biurko.",
      img: "./assets/img/p4.png",
      alt: "Nowoczesne udogodnienia"
    },
    {
      title: "Lokalizacja",
      desc: "W samym centrum Zakopanego, a mimo to spokojnie i cicho.",
      img: "./assets/img/p5.png",
      alt: "Lokalizacja"
    }
  ];

  let active = 0;

  const titleEl = document.getElementById("carousel-title");
  const descEl = document.getElementById("carousel-desc");
  const imgEl = document.getElementById("carousel-img");
  const dots = document.querySelectorAll("#carousel-dots button");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  function updateCarousel() {
    titleEl.textContent = cards[active].title;
    descEl.textContent = cards[active].desc;
    imgEl.src = cards[active].img;
    imgEl.alt = cards[active].alt;

    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-[#B48E7B]", index === active);
      dot.classList.toggle("text-white", index === active);
      dot.classList.toggle("text-[#B48E7B]", index !== active);
    });
  }

  prevBtn.addEventListener("click", () => {
    active = active === 0 ? cards.length - 1 : active - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    active = active === cards.length - 1 ? 0 : active + 1;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      active = index;
      updateCarousel();
    });
  });
  updateCarousel();
});


// !---------------- Top Products --------------------


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#top-products button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Reserve button clicked!");
    });
  });
});


// !---------------------- feature --------------------

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#features button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Feature button clicked!");
  });
});


// !---------------- Details ------------------

document.addEventListener("DOMContentLoaded", () => {
  const locations = [
    {
      id: 1,
      name: "DWORZEC PKP/PKS",
      distance: "250M",
      description: "Główny dworzec kolejowy i autobusowy w Zakopanem, dogodny punkt komunikacyjny dla podróżnych.",
      imageUrl: "./assets/img/z1.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 2,
      name: "RÓWNIEŃ KRUPOWA",
      distance: "650M",
      description: "Popularne miejsce spotkań i wydarzeń plenerowych w centrum Zakopanego.",
      imageUrl: "./assets/img/z2.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 3,
      name: "KRUPÓWKI",
      distance: "850M",
      description: "Główna ulica handlowa i turystyczna Zakopanego, pełna sklepów, restauracji i atrakcji.",
      imageUrl: "./assets/img/z3.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 4,
      name: "ANTAŁÓWKA",
      distance: "1,1KM",
      description: "Świetny punkt widokowy i miejsce na lekki spacer – idealne na złapanie oddechu i kilka pięknych zdjęć. Szczególnie polecana na poranny rozruch albo złotą godzinę z aparatem.",
      imageUrl: "./assets/img/z4.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 5,
      name: "PARK IMIENIA PREZYDENTA RP LECHA KACZYŃSKIEGO",
      distance: "300M",
      description: "Park miejski upamiętniający prezydenta RP, miejsce odpoczynku i rekreacji.",
      imageUrl: "./assets/img/z5.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 6,
      name: "TERMY ZAKOPIAŃSKIE",
      distance: "600M",
      description: "Kompleks basenów termalnych oferujący relaks i wypoczynek w ciepłych wodach geotermalnych.",
      imageUrl: "./assets/img/z6.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 7,
      name: "BUBULA BISTRO",
      distance: "150M",
      description: "Przytulna restauracja serwująca dania kuchni regionalnej i międzynarodowej.",
      imageUrl: "./assets/img/z7.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    },
    {
      id: 8,
      name: "PARK MIEJSKI IM. MARSAŁKA JÓZEFA PIŁSUDSKIEGO",
      distance: "1,2KM",
      description: "Zabytkowy park miejski, idealne miejsce na spacery i odpoczynek wśród zieleni.",
      imageUrl: "./assets/img/z8.png",
      author: "zakopane.naszemiasto.pl",
      title: "Dworzec pkp/pks"
    }
  ];

  const locationCard = document.getElementById("location-card");
  const locationImg = document.getElementById("location-img");
  const locationAuthor = document.getElementById("location-author");
  const locationTitle = document.getElementById("location-title");
  const locationDesc = document.getElementById("location-desc");

  let selectedLocationId = null;

  function updateCard(location) {
    locationCard.classList.remove("hidden", "slide-out");
    locationCard.classList.add("slide-in");
    locationImg.src = location.imageUrl;
    locationImg.alt = location.name;
    locationAuthor.textContent = location.author;
    locationTitle.textContent = location.title;
    locationDesc.textContent = location.description;
  }

  function hideCard() {
    locationCard.classList.remove("slide-in");
    locationCard.classList.add("slide-out");
    setTimeout(() => {
      locationCard.classList.add("hidden");
    }, 500); 
  }

  document.querySelectorAll("[data-location-id]").forEach((element) => {
    element.addEventListener("click", () => {
      const id = parseInt(element.getAttribute("data-location-id"));
      const location = locations.find((loc) => loc.id === id);

      if (selectedLocationId === id) {
        hideCard();
        selectedLocationId = null;
      } else {
        updateCard(location);
        selectedLocationId = id;
      }
    });
  });
});

// !--------------------- Rooms ----------------------------


document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true, 
  });
});

// !---------------------- Testimonial ----------------------

document.addEventListener("DOMContentLoaded", () => {
  try {
    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 }
      },
      loop: true
    });
  } catch (error) {
    console.error("Swiper initialization failed:", error);
  }
});

// !--------------------- Book Now ------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#book-now button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Reserve button clicked!");
  });
});













