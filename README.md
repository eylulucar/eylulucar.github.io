# Le carnet d’Eylül Uçar

Portfolio en français consacré à l’écologie, à la lecture et à la programmation. Le site est généré avec Hugo et destiné à GitHub Pages, sur [eylulucar.com](https://eylulucar.com/).

## Écrire

Le texte d’accueil et la présentation se trouvent dans `content/_index.md`. Pour ajouter un projet, copiez une fiche de `content/projets/` et donnez-lui un nom distinct. Modifiez son titre, son résumé, son lien et le texte en Markdown. Déposez l’image dans `static/images/` et renseignez son chemin et sa description dans la fiche. Le champ `weight` règle l’ordre des cartes.

## Aperçu local

Avec Hugo 0.147.9, lancez `hugo server` à la racine du dépôt. La commande `hugo --minify` génère les fichiers du site dans `public/`.

## Publication

Dans **Settings → Pages**, choisissez **GitHub Actions** comme source. Le workflow de ce dépôt construit et publie le site à chaque envoi sur `main`. Pour lancer la première publication manuellement, ouvrez **Actions → Publier le carnet sur GitHub Pages → Run workflow**.

Dans **Settings → Pages → Custom domain**, indiquez `eylulucar.com` puis configurez les enregistrements DNS auprès du fournisseur du domaine. [Instructions de GitHub pour un domaine personnalisé](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Les photographies d’illustration ont été générées pour ce carnet. Les licences des polices hébergées localement figurent dans `static/fonts/`.
