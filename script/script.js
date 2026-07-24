// Ajoute la classe "navbarDark" à la navbar dès que la page défile de plus de 100px,
// afin d'assombrir son fond une fois qu'elle n'est plus sur l'image d'en-tête
// (voir la règle .navbarScroll.navbarDark dans style.css)
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Referme automatiquement le menu "burger" (navbar repliée) sur mobile/tablette
// après un clic sur un lien, car Bootstrap ne le fait pas tout seul en dehors
// d'une navigation classique en rechargement de page
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Construit dynamiquement les cartes de la section "Compétences" à partir du
// fichier data/skills.json, pour éviter de dupliquer le HTML de chaque carte
// à la main dans index.html
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Récupère la liste des compétences au format JSON
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Parcourt chaque compétence et génère la carte HTML correspondante
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-12", "col-sm-6", "col-lg-4", "mt-4");

                const cardInner = document.createElement("div");
                cardInner.classList.add("card", "skillsText");

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const img = document.createElement("img");
                img.src = `./images/${item.image}`;
                img.alt = item.title;

                const title = document.createElement("h3");
                title.classList.add("card-title", "mt-3");
                title.textContent = item.title;

                const text = document.createElement("p");
                text.classList.add("card-text", "mt-3");
                text.textContent = item.text;

                cardBody.append(img, title, text);
                cardInner.appendChild(cardBody);
                card.appendChild(cardInner);

                // Ajoute la carte à la ligne (row) en cours de construction
                row.appendChild(card);

                // Bootstrap limite une ligne à 3 colonnes de largeur col-lg-4 (3 x 4 = 12) ;
                // on insère donc la ligne dans le conteneur tous les 3 éléments,
                // ou dès qu'on atteint le dernier élément de la liste
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Construit dynamiquement les cartes de la section "Portfolio" à partir du
// fichier data/portfolio.json, sur le même principe que createSkillsFromJSON()
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Récupère la liste des projets au format JSON
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Parcourt chaque projet et génère la carte HTML correspondante
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-12", "col-sm-6", "col-lg-4", "mt-4");

                const cardInner = document.createElement("div");
                cardInner.classList.add("card", "portfolioContent");

                const img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = `images/${item.image}`;
                img.style.width = "100%";
                img.alt = `Aperçu du projet ${item.title}`;

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const title = document.createElement("h3");
                title.classList.add("card-title");
                title.textContent = item.title;

                const text = document.createElement("p");
                text.classList.add("card-text");
                text.textContent = item.text;

                const textCenter = document.createElement("div");
                textCenter.classList.add("text-center");

                const link = document.createElement("a");
                link.href = item.link;
                link.classList.add("btn", "btn-success");
                link.textContent = `Voir le projet ${item.title}`;

                textCenter.appendChild(link);
                cardBody.append(title, text, textCenter);
                cardInner.append(img, cardBody);
                card.appendChild(cardInner);

                // Ajoute la carte à la ligne (row) en cours de construction
                row.appendChild(card);

                // Même logique que pour les compétences : on ferme la ligne tous les
                // 3 éléments (grille en col-lg-4), ou au dernier élément de la liste
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Initialisation : on active les comportements de la navbar puis on injecte
// dynamiquement le contenu des sections Compétences et Portfolio
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
