# TimChantSigne (TCS)

Site vitrine de TimChantSigne : chansons interprétées en langue des signes (chansigne).
Site statique HTML/CSS. Les images et favicons sont dans `assets/`.
Pages : `index.html` (accueil) et `mentions-legales.html`. Le style commun est dans `style.css`, le JavaScript commun (onglets, formulaires, traduction FR / EN) dans `script.js`.
Le logo utilisé sur le site est `assets/logo-transparent.png` (fond transparent). `assets/logo.png` est l'original sur fond blanc. `assets/logo-sombre.png` est une version éclaircie (recoloration automatique) chargée en mode sombre via `<picture>`.

## Décisions du cahier des charges

- **Tarifs :** jamais de prix affichés. Tout est « sur devis ».
- **Prestations :** trois onglets, un par activité. Chaque onglet se termine par un formulaire de demande de devis propre à cette activité (type de prestation, date, lieu, nombre de personnes, message).
- **Rendez-vous :** prise de rendez-vous via Cal (cal.com). Le vrai lien reste à fournir.
- **Paiement en ligne :** non.
- **Agenda :** oui, pour les dates de spectacles et d'ateliers.
- **Réseaux :** liens dans le pied de page de chaque page.
  - YouTube : https://www.youtube.com/@TimChantSigne
  - Instagram : https://www.instagram.com/timchantsigne/
  - Facebook : https://www.facebook.com/profile.php?id=61595219916062
- **Newsletter :** prévue mais masquée pour l'instant (attribut `hidden` sur la section).
- **Témoignages :** section masquée pour l'instant (attribut `hidden`), en attente de vrais témoignages.
- **Langues :** français et anglais.
  Le bouton FR / EN traduit la page dans le navigateur, avec le dictionnaire `EN` de `script.js`. Pour un long texte, écrire deux blocs `data-langue="fr"` et `data-langue="en" hidden` au lieu de passer par le dictionnaire. La page est écrite en français. Tout nouveau texte, `placeholder`, `aria-label` ou `alt` doit recevoir sa traduction dans ce dictionnaire, sinon il reste en français.
- **Email de contact :** timchantsigne@gmail.com
- **Mentions légales :** gérées par Mathieu, le développeur du site. La page `mentions-legales.html` est prête, mais les informations qui dépendent de la micro-entreprise (pas encore créée) sont des cases à remplir, repérables avec la classe `a-remplir`. Ne pas mettre le site en ligne publiquement avant de les avoir complétées.

## Charte graphique

Toujours utiliser ces couleurs. Les déclarer en variables CSS sur `:root` et prévoir le mode sombre.

### Couleurs principales

| Rôle | Code |
|---|---|
| Bordeaux (principale) | `#6D1F2F` |
| Violet (accent) | `#7352CC` |

### Neutres et teintes (mode clair)

| Rôle | Code |
|---|---|
| Encre, texte | `#22161A` |
| Gris rosé, texte secondaire | `#6B5A60` |
| Bordures et séparateurs | `#E6DADE` |
| Papier, fond de page | `#FBF8F9` |
| Fond des cartes | `#FFFFFF` |
| Rosé, teinte bordeaux des encarts et tags | `#F4E6E9` |
| Lilas, teinte violet des encarts et tags | `#EEE9FA` |
| Lilas clair, accent à utiliser sur fond bordeaux | `#C9B8FF` |

### Mode sombre

| Rôle | Code |
|---|---|
| Fond de page | `#170F12` |
| Fond des cartes | `#211619` |
| Texte | `#F3EBEE` |
| Texte secondaire | `#B7A6AC` |
| Bordures | `#3A2B31` |
| Bordeaux éclairci (principale) | `#E08D9C` |
| Violet éclairci (accent) | `#AE9BF2` |
| Teinte bordeaux des encarts | `#3A1A21` |
| Teinte violet des encarts | `#2A2142` |

### Couleurs d'état (hors charte)

Ces paires ont servi pour un tableau de contrastes. Elles ne font pas partie de la charte : ne les utiliser que pour des messages d'état (succès, avertissement, erreur).

| État | Fond | Texte |
|---|---|---|
| Vert | `#DDF1E3` | `#14532D` |
| Orange | `#FCEFD3` | `#6B4A07` |
| Rouge | `#FADADD` | `#7F1D1D` |

## Typographie du texte

Ne jamais utiliser le tiret cadratin ni le tiret demi-cadratin, dans le code comme dans les textes du site.
