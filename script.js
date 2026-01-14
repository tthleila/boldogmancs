// Állatok adatai
const animals = [
    {
        "id": 1,
        "name": "Füles",
        "type": "kutya",
        "breed": "Labrador keverék",
        "age": "2 éves",
        "gender": "Hím",
        "size": "kozepes",
        "description": "Füles egy kedves, bújós és kíváncsi kutya, aki imád játszani és sétálni. Gyorsan tanul és nagyon ragaszkodó.",
        "image": "img/kep1.jpg",
        "vaccinations": ["Kutya veszettség", "Parvovírus", "Hepatitis", "Leptospirózis"],
        "personality": "Barátságos, játékos, hűséges",
        "history": "Utcáról hozták be — valószínűleg elhagyott, mielőtt hozzánk került.",
        "specialNeeds": "Rendszeres, napi többszöri testmozgásra és figyelemre van szüksége.",
        "featured": true,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 2,
        "name": "Bea",
        "type": "macska",
        "breed": "Rövidszőrű cirmos",
        "age": "3 éves",
        "gender": "Nőstény",
        "size": "kis",
        "description": "Bea egy nyugodt, figyelmes cica, aki szeret bekuckózni, de játékos percei is vannak. Gyorsan barátkozik, ha lassan közelítenek hozzá.",
        "image": "img/kep2.jpg",
        "vaccinations": ["Macska panleukopénia", "Calicivírus", "Herpesz (rhinotracheitis)", "Macska leukózis (FeLV)"],
        "personality": "Nyugodt, kíváncsi, önálló",
        "history": "Valószínűleg elkóborolt házi macska — találtuk és behoztuk a menhelyre.",
        "specialNeeds": "Beltéri tartás ajánlott; rendszeres tiszta almot és nyugodt környezetet igényel.",
        "featured": true,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 3,
        "name": "Bodri",
        "type": "kutya",
        "breed": "Beagle",
        "age": "1 éves",
        "gender": "Hím",
        "size": "kozepes",
        "description": "Bodri egy kíváncsi és vidám kutya, aki mindig készen áll egy új kalandra.",
        "image": "img/kep3.jpg",
        "vaccinations": ["Kutya veszettség", "Parvovírus", "Hepatitis", "Leptospirózis"],
        "personality": "Kíváncsi, vidám, intelligens",
        "history": "Bodri tenyésztőtől került hozzánk, aki bezárta a vállalkozását.",
        "specialNeeds": "Rendszeres testmozgásra van szüksége",
        "featured": true,
        "urgent": true,
        "adopted": false
    },
    {
        "id": 4,
        "name": "Cirmoska",
        "type": "macska",
        "breed": "Házimacska (tarka)",
        "age": "5 éves",
        "gender": "Nőstény",
        "size": "kozepes",
        "description": "Cirmoska egy kedves, visszahúzódó macska, aki szeret puha párnákon pihenni és figyelni a környezetét.",
        "image": "img/kep4.jpg",
        "vaccinations": ["Macska veszettség", "Rhinotracheitis", "Calicivírus", "Panleukopenia"],
        "personality": "Csendes, érzékeny, ragaszkodó",
        "history": "Egy idősebb hölgytől került be, aki sajnos már nem tudott gondoskodni róla.",
        "specialNeeds": "Szereti a nyugalmat és a saját kis fekhelyét.",
        "featured": false,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 5,
        "name": "Bátor",
        "type": "kutya",
        "breed": "Kevert (valószínűleg terrier és vizsla keverék)",
        "age": "3 éves",
        "gender": "Kan",
        "size": "kozepes",
        "description": "Bátor fegyelmezett és figyelmes szolgálati kutya, aki mindig készen áll a feladatokra.",
        "image": "img/kep5.jpg",
        "vaccinations": ["Veszettség", "Parvovírus", "Szopornyica", "Leptospirózis"],
        "personality": "Éber, intelligens, hűséges",
        "history": "Kölyökkorától kezdve szolgálati kutyának képezték.",
        "specialNeeds": "Rendszeres tréningekre és sok mozgásra van szüksége.",
        "featured": false,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 6,
        "name": "Bundás",
        "type": "macska",
        "breed": "Házimacska (cirmos)",
        "age": "2 éves",
        "gender": "Kandúr",
        "size": "kozepes",
        "description": "Bundás egy játékos és aktív fiatal macska, aki imád a játékok között heverészni.",
        "image": "img/kep6.jpg",
        "vaccinations": ["Macska veszettség", "Rhinotracheitis", "Calicivírus"],
        "personality": "Játékos, kíváncsi, energikus",
        "history": "Egy kertben találták testvérével együtt, majd befogadták.",
        "specialNeeds": "Sok játékkal és foglalkoztatással érzi jól magát.",
        "featured": false,
        "urgent": true,
        "adopted": false
    },
    {
        "id": 7,
        "name": "Balu",
        "type": "kutya",
        "breed": "keverék (bull típusú)",
        "age": "kb. 3 éves",
        "gender": "Hím",
        "size": "kozepes-nagy",
        "description": "Balu egy erős, izmos, de meglepően gyengéd kutya. Nagyon szereti a sétákat és az emberek társaságát.",
        "image": "img/kep7.jpg",
        "vaccinations": ["Veszettség", "Parvovírus", "Hepatitis", "Leptospirózis"],
        "personality": "Barátságos, energikus, ragaszkodó",
        "history": "Gazdától került be, aki már nem tudta ellátni.",
        "specialNeeds": "Erős kutya, ezért következetes gazdára és sok mozgásra van szüksége.",
        "featured": true,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 8,
        "name": "Luna",
        "type": "macska",
        "breed": "rövidszőrű keverék",
        "age": "kb. 1 éves",
        "gender": "Nőstény",
        "size": "kis",
        "description": "Luna egy gyönyörű, fekete cica aranyszínű szemekkel. Nyugodt, figyelmes tekintete igazán megnyerő.",
        "image": "img/kep8.jpg",
        "vaccinations": ["Macska veszettség", "Rhinotracheitis", "Calicivírus", "Panleukopenia"],
        "personality": "Kedves, nyugodt, bújós",
        "history": "Utcáról mentették be sérülten, ma már teljesen egészséges.",
        "specialNeeds": "Érzékeny lehet a hidegre, így benti tartás ajánlott.",
        "featured": false,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 9,
        "name": "Max",
        "type": "kutya",
        "breed": "keverék",
        "age": "kb. 5 éves",
        "gender": "Hím",
        "size": "nagy",
        "description": "Max egy kedves, nyugodt kutya, aki imád pihenni a fűben. Hosszú séta után boldogan liheg.",
        "image": "img/kep9.jpg",
        "vaccinations": ["Veszettség", "Parvovírus", "Hepatitis", "Leptospirózis"],
        "personality": "Nyugodt, barátságos, türelmes",
        "history": "Kóbor kutyaként került be, de hamar megmutatta, mennyire szereti az embereket.",
        "specialNeeds": "Mérsékelt mozgásigény, érzékeny a melegre.",
        "featured": true,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 10,
        "name": "Molly",
        "type": "macska",
        "breed": "Bengáli",
        "age": "3 éves",
        "gender": "Nőstény",
        "size": "kozepes",
        "description": "Molly egy aktív és kíváncsi macska, aki szeret magas helyekre mászni.",
        "image": "img/kep10.jpg",
        "vaccinations": ["Macska veszettség", "Rhinotracheitis", "Calicivírus", "Panleukopenia"],
        "personality": "Aktív, kíváncsi, magas helyeket kedveli",
        "history": "Molly egy tenyésztőtől került hozzánk, aki bezárta a vállalkozását.",
        "specialNeeds": "Magas kaparófa szükséges",
        "featured": false,
        "urgent": true,
        "adopted": false
    },
    {
        "id": 11,
        "name": "Bella",
        "type": "kutya",
        "breed": "Arany retriever",
        "age": "1 éves",
        "gender": "Nőstény",
        "size": "nagy",
        "description": "Bella egy gyengéd és ragaszkodó kutya, aki imádja a gyerekeket.",
        "image": "img/kep11.jpg",
        "vaccinations": ["Kutya veszettség", "Parvovírus", "Hepatitis", "Leptospirózis"],
        "personality": "Gyengéd, ragaszkodó, gyerekbarát",
        "history": "Bella egy családtól került hozzánk, akiknek nem volt idejük rá.",
        "specialNeeds": "Nincs",
        "featured": true,
        "urgent": false,
        "adopted": false
    },
    {
        "id": 12,
        "name": "Oscar",
        "type": "macska",
        "breed": "Maine Coon",
        "age": "5 éves",
        "gender": "Hím",
        "size": "nagy",
        "description": "Oscar egy nyugodt és barátságos macska, aki szeret a társaságában lenni.",
        "image": "img/kep12.jpg",
        "vaccinations": ["Macska veszettség", "Rhinotracheitis", "Calicivírus", "Panleukopenia"],
        "personality": "Nyugodt, barátságos, társaságkedvelő",
        "history": "Oscar előző gazdája idősek otthonába került.",
        "specialNeeds": "Rendszeres fésülésre van szüksége",
        "featured": false,
        "urgent": false,
        "adopted": false
    }
];

// Blog bejegyzések
const blogPosts = [
    {
        id: 1,
        title: "Rekord számú örökbefogadás!",
        excerpt: "Szeptemberben 25 állat talált örökbefogadót, ami rekord szám a menhelyünk történetében.",
        content: "Különösen örülünk, hogy a hosszú ideje nálunk élő idősebb állatok is gazdára találtak. A szeptemberi hónapban 25 állatot sikerült örökbefogadtatnunk, ami a menhelyünk történetében eddigi legjobb eredmény. Köszönjük mindenkinek, aki részt vett a sikerben!",
        image:"img/blog1.jpg",
        date: "2023-10-05",
        author: "Dominika"
    },
    {
        id: 2,
        title: "Új menhelyi program indult!",
        excerpt: "Bevezetjük a 'Menhelyi Napok' programot, ahol látogatók megismerhetik munkánkat.",
        content: "A program keretében minden szombaton 10-14 óra között tartunk nyílt napokat. Látogatók megismerhetik az állatokat, beszélgethetnek a gondozókkal és megtekinthetik a menhelyi létesítményeinket. Az első nyílt napok nagy sikert arattak, több mint 50 látogató volt nálunk!",
        image: "img/blog2.jpg",
        date: "2023-10-15",
        author: "Jázmin"
    },
    {
        id: 3,
        title: "Télire készülünk - adománygyűjtés",
        excerpt: "Téli takarókat, melegítőket és élelmiszert gyűjtünk az állatok számára.",
        content: "A hideg időjárás elközeledtével fontos, hogy az állatkák kényelmesen átvészeljék a telet. Gyűjtünk meleg takarókat, kutyaruhákat, macskamelegítőket és minőségi élelmiszereket. Az adományokat a menhelyünkre szállíthatják hétköznap 9-17 óra között.",
        image: "img/blog3.jpg",
        date: "2023-09-28",
        author: "Leila"
    }
];

// Globális változók
let currentAnimal = null;
let currentFilter = "all";
let currentSlide = 0;
let slideInterval;

// =========================
// EGYSZERŰ SLIDESHOW KEZELÉS
// =========================

function initSlideshow() {
    console.log("Slideshow inicializálása...");
    
    // Ellenőrizzük, hogy van-e slideshow
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slideshow-dot');
    const prevArrow = document.querySelector('.slideshow-arrow.prev');
    const nextArrow = document.querySelector('.slideshow-arrow.next');
    
    console.log(`Elemek: ${slides.length} slide, ${dots.length} dot, ${prevArrow ? 'van' : 'nincs'} előre nyíl, ${nextArrow ? 'van' : 'nincs'} hátra nyíl`);
    
    if (slides.length === 0) {
        console.warn("Nincsenek slide elemek!");
        return;
    }
    
    // 1. Kattintás előre nyílra (jobbra)
    if (nextArrow) {
        console.log("Hátra nyíl esemény hozzáadása");
        nextArrow.addEventListener('click', function(e) {
            console.log("HÁTRA nyílra kattintottak!");
            e.preventDefault();
            e.stopPropagation();
            
            // Jelenlegi slide eltávolítása
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            // Következő slide számítása
            currentSlide = currentSlide + 1;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            
            // Új slide beállítása
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
            
            // Intervallum újraindítása
            restartSlideshowInterval();
            
            console.log(`Új slide: ${currentSlide}`);
        });
    }
    
    // 2. Kattintás vissza nyílra (balra)
    if (prevArrow) {
        console.log("Előre nyíl esemény hozzáadása");
        prevArrow.addEventListener('click', function(e) {
            console.log("ELŐRE nyílra kattintottak!");
            e.preventDefault();
            e.stopPropagation();
            
            // Jelenlegi slide eltávolítása
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            // Előző slide számítása
            currentSlide = currentSlide - 1;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            
            // Új slide beállítása
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
            
            // Intervallum újraindítása
            restartSlideshowInterval();
            
            console.log(`Új slide: ${currentSlide}`);
        });
    }
    
    // 3. Dotok kezelése
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            console.log(`Dot ${index} kattintás`);
            
            // Jelenlegi slide eltávolítása
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            // Új slide beállítása
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Intervallum újraindítása
            restartSlideshowInterval();
        });
    });
    
    // 4. Automatikus slideshow indítása
    startSlideshowInterval();
    
    // 5. Hover effekt - stop on hover, start on leave
    const slideshow = document.querySelector('.slideshow');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', function() {
            console.log("Slideshow hover - stop");
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        });
        
        slideshow.addEventListener('mouseleave', function() {
            console.log("Slideshow leave - start");
            startSlideshowInterval();
        });
    }
}

function startSlideshowInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    slideInterval = setInterval(function() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slideshow-dot');
        
        if (slides.length === 0) return;
        
        // Jelenlegi slide eltávolítása
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.remove('active');
        }
        
        // Következő slide számítása
        currentSlide = currentSlide + 1;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        // Új slide beállítása
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
        
        console.log(`Automatikus slide váltás: ${currentSlide}`);
    }, 6000); // 6 másodpercenként
}

function restartSlideshowInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    startSlideshowInterval();
}

// =========================
// OLDAL NAVIGÁCIÓ
// =========================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    // Navigációs linkek aktív állapotának frissítése
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Görgetés az oldal tetejére
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// =========================
// ÁLLAT KÁRTYÁK GENERÁLÁSA
// =========================

function renderAnimals(containerId, filter = "all") {
    const animalGrid = document.getElementById(containerId);
    if (!animalGrid) {
        console.error(`Nem található: ${containerId}`);
        return;
    }
    
    animalGrid.innerHTML = '';

    const filteredAnimals = animals.filter(animal => {
        if (filter === "all") return true;
        if (filter === "kutya" && animal.type === "kutya") return true;
        if (filter === "macska" && animal.type === "macska") return true;
        if (filter === "kicsi" && animal.size === "kis") return true;
        if (filter === "kozepes" && animal.size === "kozepes") return true;
        if (filter === "nagy" && animal.size === "nagy") return true;
        if (filter === "urgent" && animal.urgent && !animal.adopted) return true;
        if (filter === "featured" && animal.featured && !animal.adopted) return true;
        return false;
    });

    if (filteredAnimals.length === 0) {
        animalGrid.innerHTML = '<div class="no-results"><p>Nincs találat a kiválasztott szűrővel.</p></div>';
        return;
    }

    filteredAnimals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.className = 'animal-card fade-in';
        
        if (animal.adopted) {
            animalCard.classList.add('adopted-animal');
        }
        
        if (animal.urgent) {
            animalCard.classList.add('urgent-animal');
        }

        animalCard.innerHTML = `
            <div class="animal-image">
                <img src="${animal.image}" alt="${animal.name}" onerror="this.src='https://images.unsplash.com/photo-1514888286974-6d03bde4ba42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                ${animal.urgent ? '<div class="urgent-label">Sürgős eset!</div>' : ''}
                ${animal.adopted ? '<div class="adopted-label">Örökbefogadva!</div>' : ''}
            </div>
            <div class="animal-info">
                <h3>${animal.name}</h3>
                <p>${animal.description}</p>
                <div class="animal-features">
                    <span class="feature">${animal.type}</span>
                    <span class="feature">${animal.breed}</span>
                    <span class="feature">${animal.age}</span>
                    <span class="feature">${animal.gender}</span>
                    <span class="feature">${animal.size}</span>
                </div>
                <div class="animal-actions">
                    ${animal.adopted ? 
                        '<button class="adopted-btn" disabled>Már örökbefogadva!</button>' : 
                        `<button class="adopt-btn" data-id="${animal.id}">Örökbefogadom!</button>`
                    }
                    <button class="details-btn" data-id="${animal.id}">Részletek</button>
                </div>
            </div>
        `;

        animalGrid.appendChild(animalCard);
    });

    // Örökbefogadás gomb eseménykezelő
    document.querySelectorAll('.adopt-btn').forEach(button => {
        button.addEventListener('click', function() {
            const animalId = this.getAttribute('data-id');
            currentAnimal = animals.find(a => a.id == animalId);
            const animalInput = document.getElementById('animalNameInput');
            if (animalInput && currentAnimal) {
                animalInput.value = currentAnimal.name;
            }

            document.getElementById('adoptionModal').style.display = 'flex';
            document.body.classList.add('modal-open');
        });
    });

    // Részletek gomb eseménykezelő
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const animalId = this.getAttribute('data-id');
            showAnimalDetails(animalId);
        });
    });
}

// =========================
// ÁLLAT RÉSZLETEK MEGJELENÍTÉSE
// =========================

function showAnimalDetails(animalId) {
    const animal = animals.find(a => a.id == animalId);
    if (!animal) return;
    
    const animalDetails = document.getElementById('animalDetails');
    if (!animalDetails) return;

    animalDetails.innerHTML = `
        <div class="animal-details-image">
            <img src="${animal.image}" alt="${animal.name}" onerror="this.src='https://images.unsplash.com/photo-1514888286974-6d03bde4ba42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
            ${animal.urgent ? '<div class="urgent-badge">Sürgős eset!</div>' : ''}
            ${animal.adopted ? '<div class="adopted-badge">Örökbefogadva!</div>' : ''}
        </div>
        <div class="animal-details-info">
            <h3>${animal.name}</h3>
            <p><strong>Faj:</strong> ${animal.type}</p>
            <p><strong>Fajta:</strong> ${animal.breed}</p>
            <p><strong>Életkor:</strong> ${animal.age}</p>
            <p><strong>Nem:</strong> ${animal.gender}</p>
            <p><strong>Méret:</strong> ${animal.size}</p>
            <p><strong>Személyiség:</strong> ${animal.personality}</p>
            <p><strong>Története:</strong> ${animal.history}</p>
            <p><strong>Speciális igények:</strong> ${animal.specialNeeds}</p>
            <p><strong>Státusz:</strong> ${animal.adopted ? '<span style="color: #2a9d8f; font-weight: bold;">Örökbefogadva</span>' : '<span style="color: #e74c3c; font-weight: bold;">Örökbefogadható</span>'}</p>

            <div class="vaccination-list">
                <h4>Oltások:</h4>
                <ul>
                    ${animal.vaccinations.map(vacc => `<li>${vacc}</li>`).join('')}
                </ul>
            </div>

            ${animal.adopted ? 
                '<button class="btn" style="margin-top: 20px; background-color: #95a5a6; cursor: not-allowed;" disabled>Már örökbefogadva</button>' : 
                `<button class="btn" style="margin-top: 20px;" onclick="startAdoption(${animal.id})">Örökbefogadom!</button>`
            }
        </div>
    `;

    document.getElementById('animalModal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

// =========================
// ÖRÖKBEFOGADÁS INDÍTÁSA
// =========================

function startAdoption(animalId) {
    currentAnimal = animals.find(a => a.id == animalId);
    if (!currentAnimal) return;
    
    const animalInput = document.getElementById('animalNameInput');
    if (animalInput) {
        animalInput.value = currentAnimal.name;
    }
    
    // Frissítjük a modal állat információit
    const modalAnimalInfo = document.getElementById('modalAnimalInfo');
    if (modalAnimalInfo && currentAnimal) {
        modalAnimalInfo.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${currentAnimal.image}" alt="${currentAnimal.name}" 
                     style="width: 80px; height: 80px; border-radius: 10px; object-fit: cover;"
                     onerror="this.src='https://images.unsplash.com/photo-1514888286974-6d03bde4ba42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
                <div>
                    <h4 style="margin: 0 0 5px 0; color: var(--primary);">${currentAnimal.name}</h4>
                    <p style="margin: 0; font-size: 0.95rem;">${currentAnimal.type} - ${currentAnimal.breed}</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">${currentAnimal.age} • ${currentAnimal.gender} • ${currentAnimal.size}</p>
                </div>
            </div>
        `;
    }
    
    // Állat részletek modal bezárása
    document.getElementById('animalModal').style.display = 'none';
    
    // Örökbefogadási modal megjelenítése
    document.getElementById('adoptionModal').style.display = 'flex';
    document.body.classList.add('modal-open');
    
    // Automatikus görgetés a modal tetejére
    setTimeout(() => {
        const modalContent = document.querySelector('.adoption-modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 100);
}

// =========================
// BLOG BEJEGYZÉSEK MEGJELENÍTÉSE
// =========================

function renderBlogPosts() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) {
        console.error("Nem található: newsGrid");
        return;
    }
    
    newsGrid.innerHTML = '';

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'news-card fade-in';

        postElement.innerHTML = `
            <div class="news-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="news-content">
                <h3>${post.title}</h3>
                <p class="news-excerpt">${post.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">${formatDate(post.date)}</span>
                    <span class="news-author">Írta: ${post.author}</span>
                </div>
                <button class="news-read-more" data-id="${post.id}">Tovább olvasom</button>
            </div>
        `;

        newsGrid.appendChild(postElement);
    });

    // Tovább olvasom gombok eseménykezelője
    document.querySelectorAll('.news-read-more').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-id');
            const post = blogPosts.find(p => p.id == postId);
            if (post) {
                alert(`A teljes cikk megjelenítése jelenleg fejlesztés alatt áll.\n\n${post.title}\n\n${post.content}`);
            }
        });
    });
}

// =========================
// SEGÉDFÜGGVÉNYEK
// =========================

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('hu-HU', options);
}

function updateShelterStatus() {
    const currentAnimals = animals.length;
    const adoptedThisMonth = animals.filter(a => a.adopted).length;
    const urgentAnimals = animals.filter(a => a.urgent && !a.adopted).length;

    document.getElementById('currentAnimals').textContent = currentAnimals;
    document.getElementById('adoptedThisMonth').textContent = adoptedThisMonth;
    document.getElementById('urgentAnimals').textContent = urgentAnimals;
}

function handleHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// =========================
// OLDAL BETÖLTÉSEKOR
// =========================

document.addEventListener('DOMContentLoaded', function() {
    console.log("📱 Oldal betöltődött, inicializálás...");
    
    // 1. Slideshow inicializálása (EZ A LEGFONTOSABB!)
    initSlideshow();
    
    // 2. Oldal navigáció
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // 3. Szűrő gombok
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            
            renderAnimals('adoptionAnimals', currentFilter);
        });
    });
    
    // 4. Adat betöltések
    // Örökbefogadások localStorage-ból
    try {
        const savedAdoptions = localStorage.getItem('boldogMancsAdoptions');
        if (savedAdoptions) {
            const adoptions = JSON.parse(savedAdoptions);
            adoptions.forEach(adoption => {
                const animal = animals.find(a => a.id === adoption.animalId);
                if (animal) {
                    animal.adopted = true;
                }
            });
        }
    } catch (e) {
        console.error('Hiba localStorage betöltésekor:', e);
    }
    
    // 5. Állatok és blog bejegyzések renderelése
    renderAnimals('featuredAnimals', 'featured');
    renderBlogPosts();
    renderAnimals('adoptionAnimals', 'all');
    updateShelterStatus();
    
    // 6. Modal kezelés
    const closeAdoptionBtn = document.getElementById('closeAdoption');
    const closeAnimalBtn = document.getElementById('closeAnimal');
    const adoptionModal = document.getElementById('adoptionModal');
    const animalModal = document.getElementById('animalModal');
    const cancelBtn = document.getElementById('cancelAdoption');
    const adoptionForm = document.getElementById('adoptionForm');
    
    if (closeAdoptionBtn) {
        closeAdoptionBtn.addEventListener('click', function() {
            if (adoptionModal) {
                adoptionModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    if (closeAnimalBtn) {
        closeAnimalBtn.addEventListener('click', function() {
            if (animalModal) {
                animalModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (adoptionModal) {
                adoptionModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    // Modal háttér kattintás
    if (adoptionModal) {
        adoptionModal.addEventListener('click', function(e) {
            if (e.target === adoptionModal) {
                adoptionModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    if (animalModal) {
        animalModal.addEventListener('click', function(e) {
            if (e.target === animalModal) {
                animalModal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    // Űrlap kezelés
    if (adoptionForm) {
        adoptionForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const animalName = document.getElementById('animalNameInput').value;
            const terms = document.getElementById('terms').checked;
            
            // Validáció
            if (!fullName || !email || !phone || !animalName || !terms) {
                alert('Kérjük, töltsd ki az összes kötelező mezőt (*) és fogadd el a feltételeket!');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Kérjük, érvényes email címet adj meg!');
                return;
            }
            
            const adoptedAnimal = animals.find(a => a.name === animalName);
            if (!adoptedAnimal) {
                alert('Hiba történt az állat azonosítása során.');
                return;
            }
            
            if (adoptedAnimal.adopted) {
                alert(`Sajnáljuk, de ${animalName} már örökbefogadásra került.`);
                document.getElementById('adoptionModal').style.display = 'none';
                document.body.classList.remove('modal-open');
                return;
            }
            
            const confirmAdoption = confirm(`Biztosan örökbefogadod ${animalName}-t?\n\nA jelentkezésed elküldése után hamarosan felvesszük veled a kapcsolatot.`);
            
            if (!confirmAdoption) return;
            
            // Sikeres örökbefogadás
            adoptedAnimal.adopted = true;
            
            alert(`
✅ Sikeresen elküldted a jelentkezést ${animalName} örökbefogadására!

Adatok:
- Név: ${fullName}
- Email: ${email}
- Telefon: ${phone}

Hamarosan felvesszük veled a kapcsolatot!

Köszönjük, hogy otthont adsz egy szeretetre vágyó léleknek! 🐾
            `);
            
            // Frissítések
            renderAnimals('featuredAnimals', 'featured');
            renderAnimals('adoptionAnimals', currentFilter);
            updateShelterStatus();
            
            // Űrlap reset
            adoptionForm.reset();
            document.getElementById('adoptionModal').style.display = 'none';
            document.body.classList.remove('modal-open');
            
            // Mentés localStorage-ba
            try {
                let adoptions = JSON.parse(localStorage.getItem('boldogMancsAdoptions')) || [];
                adoptions.push({
                    animalId: adoptedAnimal.id,
                    animalName: adoptedAnimal.name,
                    adopterName: fullName,
                    email: email,
                    date: new Date().toISOString()
                });
                localStorage.setItem('boldogMancsAdoptions', JSON.stringify(adoptions));
            } catch (e) {
                console.error('Hiba localStorage mentésekor:', e);
            }
        });
    }
    
    // 7. Scroll esemény
    window.addEventListener('scroll', handleHeaderScroll);
    
    // 8. Konzol üzenet
    console.log("✅ Oldal sikeresen inicializálva!");
    console.log(`🐾 Összes állat: ${animals.length}`);
    console.log(`✨ A slideshow működnie kell! Próbáld ki a nyilakat!`);
    
    // 9. Hibakezelő képekhez
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
        }
    }, true);
});

// =========================
// GLOBÁLIS FÜGGVÉNYEK
// =========================

// Ezekre a funkciókra szükség van a HTML onclick attribútumokhoz
window.startAdoption = startAdoption;
window.showAnimalDetails = showAnimalDetails;

console.log("🚀 script.js fájl betöltve");