# Portfolio – Esther Beaudouin

Site portfolio personnel présentant mon profil, mes compétences et mes projets en tant que développeuse web junior spécialisée en test QA.

🔗 Dépôt : [github.com/Str-33/portefolio](https://github.com/Str-33/portefolio)

## Objectifs du projet

- Corriger et optimiser le site portfolio existant (accessibilité, responsive, bugs)
- Personnaliser le portefolio avec mes compétences et mes projects
- Publier le site en ligne

## Aperçu

Le site est composé de 5 sections accessibles depuis une navbar fixe :

- **Accueil** – bannière de présentation
- **À propos** – présentation personnelle et informations de contact rapides
- **Compétences** – cartes générées dynamiquement à partir d'un fichier JSON
- **Portfolio** – liste des projets réalisés, générée dynamiquement
- **Contact** – téléphone, email, LinkedIn

## Stack technique

- **HTML5 / CSS3**
- **JavaScript (vanilla)** – génération dynamique du contenu via `fetch()`
- **[Bootstrap 5.1.3](https://getbootstrap.com/)** – grille et composants (navbar, cards...)
- **[Font Awesome 6.5.1](https://fontawesome.com/)** – icônes


## Structure du projet

```
portefolio/
├── index.html              # Page principale
├── style.css                # Styles du site
├── script/
│   └── script.js             # Logique JS (navbar, génération dynamique des cartes)
├── data/
│   ├── skills.json           # Contenu de la section "Compétences"
│   └── portfolio.json        # Contenu de la section "Portfolio"
└── images/                   # Images et icônes utilisées sur le site
```

## Lancer le projet en local

Le projet ne nécessite ni dépendance ni installation. Deux options :

**Option 1 – ouverture directe**
Ouvrir `index.html` dans un navigateur.

> ⚠️ Certains navigateurs bloquent les appels `fetch()` sur des fichiers locaux (`file://`). Si les sections Compétences/Portfolio n'apparaissent pas, utiliser l'option 2.

**Option 2 – serveur local** (recommandé)
```bash
# avec Python
python3 -m http.server 8000

# avec l'extension VS Code "Live Server"
```
Puis ouvrir `http://localhost:8000`.

## Accessibilité & SEO

Le projet a été audité avec Lighthouse. Points d'amélioration identifiés et en cours de correction :
- Ajout des attributs `alt` sur les images (dont celles générées dynamiquement)
- Cohérence de la hiérarchie des titres (`h1` → `h2` → `h3`...)
- Différenciation des libellés des liens identiques
- Ajout d'une meta description (déjà présente dans `index.html`)

