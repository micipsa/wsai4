# 🎮 Gamer Todo – Mini application JavaScript

Gamer Todo est une mini-application web de gestion de tâches pensée comme un petit **dashboard** de quêtes pour les joueurs et créateurs.  
Elle est développée uniquement avec HTML, CSS et JavaScript vanilla, et déployée via GitHub Pages. [web:19][web:30][web:50]

---

## ✨ Fonctionnalités

- Ajout rapide de tâches (quêtes) via un champ texte et un bouton dédié. [web:19][web:39]  
- Marquage des tâches comme terminées ou actives grâce à une case à cocher. [web:19][web:39]  
- Suppression d’une tâche en un clic via un bouton dédié. [web:19][web:39]  
- Dark / Light mode avec bascule et persistance de la préférence utilisateur. [web:29][web:38]  
- Sauvegarde des tâches dans `localStorage` pour garder la liste après rechargement. [web:39][web:51]  
- Interface responsive avec thème **gamer** (police futuriste, accents néon, cartes sombres). [web:27][web:37]

---

## 🧱 Stack technique

- **HTML5** pour la structure de l’interface. [web:39][web:51]  
- **CSS3** (variables CSS, flexbox, effets de glow / néon, responsive). [web:27][web:28]  
- **JavaScript (ES6+)** pour la logique de l’application, la gestion du DOM et `localStorage`. [web:19][web:30]  
- **GitHub Pages** pour l’hébergement statique de l’application. [web:50][web:53]

---

## 📌 Spécification fonctionnelle (mini spec)

**User stories principales :** [web:30][web:51]  
- En tant qu’utilisateur, je peux ajouter une nouvelle tâche afin de planifier ce que j’ai à faire.  
- En tant qu’utilisateur, je peux marquer une tâche comme complétée afin de visualiser mon avancement.  
- En tant qu’utilisateur, je peux supprimer une tâche pour garder ma liste propre.  
- En tant qu’utilisateur, je peux choisir entre un thème sombre et clair, et ce choix est mémorisé pour mes prochaines visites. [web:29][web:38]

**Règles / contraintes :** [web:39][web:51]  
- Les tâches vides ne sont pas ajoutées (texte nettoyé avec `trim`).  
- Longueur d’une tâche limitée (par exemple 80 caractères) pour garder la liste lisible.  
- Les données (tâches + état complété) sont stockées sous forme de tableau JSON dans `localStorage`.  
- L’interface reste utilisable sur mobile (mise en colonne du formulaire, boutons full-width). [web:49][web:51]

---

## 🚀 Installation et exécution locale

1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/<ton-username>/gamer-todo.git
   cd gamer-todo
