# TimChantSigne (TCS)

Site vitrine de TimChantSigne : chansons interprétées en langue des signes (chansigne).
Site statique HTML/CSS. Les images et favicons sont dans `assets/`.
Le logo utilisé sur le site est `assets/logo-transparent.png` (fond transparent). `assets/logo.png` est l'original sur fond blanc.

## Décisions du cahier des charges

- **Tarifs :** jamais de prix affichés. Tout est « sur devis ».
- **Prestations :** trois onglets, un par activité. Chaque onglet se termine par un formulaire de demande de devis propre à cette activité (type de prestation, date, lieu, nombre de personnes, message).
- **Rendez-vous :** prise de rendez-vous via Cal (cal.com). Le vrai lien reste à fournir.
- **Paiement en ligne :** non.
- **Agenda :** oui, pour les dates de spectacles et d'ateliers.
- **Réseaux :** liens vers Instagram et Facebook.
- **Newsletter :** prévue mais masquée pour l'instant (attribut `hidden` sur la section).
- **Langues :** français et anglais.
  Le bouton FR / EN traduit la page dans le navigateur, avec le dictionnaire `EN` du script en bas de `index.html`. La page est écrite en français. Tout nouveau texte, `placeholder`, `aria-label` ou `alt` doit recevoir sa traduction dans ce dictionnaire, sinon il reste en français.
- **Email de contact :** timchantsigne@gmail.com
- **Mentions légales :** gérées par Mathieu, le SIRET a été fourni.

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
