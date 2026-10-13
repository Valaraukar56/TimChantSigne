document.documentElement.classList.add('js');

// Menu mobile
const boutonMenu = document.querySelector('.nav__menu');
const menu = document.getElementById('menu');
function basculerMenu(ouvrir) {
    boutonMenu.setAttribute('aria-expanded', ouvrir);
    boutonMenu.setAttribute('aria-label', document.documentElement.lang === 'en'
        ? (ouvrir ? 'Close menu' : 'Open menu')
        : (ouvrir ? 'Fermer le menu' : 'Ouvrir le menu'));
    boutonMenu.setAttribute('data-fr-aria-label', ouvrir ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.toggleAttribute('data-ouvert', ouvrir);
}
if (boutonMenu) {
    boutonMenu.addEventListener('click', () => basculerMenu(boutonMenu.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => basculerMenu(false)));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu.hasAttribute('data-ouvert')) { basculerMenu(false); boutonMenu.focus(); }
    });
}

// Apparition des blocs au défilement
const blocs = document.querySelectorAll('.revele');
if ('IntersectionObserver' in window) {
    const observateur = new IntersectionObserver(entrees => {
        entrees.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('visible');
            observateur.unobserve(e.target);
        });
    }, { rootMargin: '0px 0px -10% 0px' });
    blocs.forEach(b => observateur.observe(b));
} else {
    blocs.forEach(b => b.classList.add('visible'));
}

// Lien de navigation de la section visible
const liensNav = [...document.querySelectorAll('.nav__liens a[href^="#"]:not(.nav__devis)')];
const sections = liensNav.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if (sections.length && 'IntersectionObserver' in window) {
    const suivi = new IntersectionObserver(entrees => {
        entrees.forEach(e => {
            if (!e.isIntersecting) return;
            liensNav.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => suivi.observe(s));
}

// Onglets des prestations
const onglets = [...document.querySelectorAll('.onglet')];
function activer(onglet) {
    onglets.forEach(o => {
        const actif = o === onglet;
        o.setAttribute('aria-selected', actif);
        o.tabIndex = actif ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !actif;
    });
}
onglets.forEach((o, i) => {
    o.addEventListener('click', () => activer(o));
    o.addEventListener('keydown', e => {
        const pas = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!pas) return;
        const suivant = onglets[(i + pas + onglets.length) % onglets.length];
        activer(suivant);
        suivant.focus();
    });
});

// Formulaires de test : aucun envoi réel
document.querySelectorAll('[data-formulaire]').forEach(f => {
    f.addEventListener('submit', e => {
        e.preventDefault();
        f.querySelector('.formulaire__ok').hidden = false;
        f.reset();
    });
});

// Traduction FR / EN
// Chaque texte francais de la page est cherche dans ce dictionnaire.
// Pour un nouveau texte, ajouter sa traduction ici.
// Pour un long texte, ecrire deux blocs <div data-langue="fr"> et <div data-langue="en" hidden>.
const EN = {
    "Vidéos": "Videos",
    "Le chansigne en images": "Sign-song on screen",
    "Retrouvez les chansons signées par Timothy Irdel sur la chaîne YouTube TimChantSigne.": "Watch the songs signed by Timothy Irdel on the TimChantSigne YouTube channel.",
    "Dernière vidéo": "Latest video",
    "Stromae, chant signé par Timothy Irdel": "Stromae, sign-sung by Timothy Irdel",
    "Publiée le 27 juillet 2025": "Published on 27 July 2025",
    "Voir sur YouTube": "Watch on YouTube",
    "Toute la chaîne": "Full channel",
    "Voir la vidéo L'enfer de Stromae sur YouTube": "Watch L'enfer by Stromae on YouTube",
    "À propos": "About",
    "Agenda": "Events",
    "Prestations": "Services",
    "Demander un devis": "Request a quote",
    "Chansigne & spectacle vivant": "Sign-song & live performance",
    "la musique se voit aussi": "music you can see",
    "Des chansons traduites et interprétées en langue des signes, pour que chaque note se partage avec les mains. Concerts, ateliers et vidéos accessibles à toutes et tous.": "Songs translated and performed in sign language, so every note can be shared through the hands. Concerts, workshops and videos accessible to everyone.",
    "Découvrir les vidéos": "Watch the videos",
    "Réserver un atelier": "Book a workshop",
    "chansons signées": "signed songs",
    "concerts accessibles": "accessible concerts",
    "2 300": "2,300",
    "élèves en atelier": "workshop students",
    "85 k": "85k",
    "abonnés en ligne": "online followers",
    "Faire danser les mots avec les mains": "Making words dance with your hands",
    "Tim a découvert le chansigne en 2018 lors d'un festival. Depuis, il adapte des chansons en langue des signes française, en travaillant le rythme, l'émotion et la poésie de chaque geste.": "Tim discovered sign-song at a festival in 2018. Since then, he has been adapting songs into French Sign Language, working on the rhythm, emotion and poetry of every gesture.",
    "L'objectif : que les personnes sourdes, malentendantes et entendantes vivent la même chanson, au même moment, ensemble.": "The goal: for deaf, hard of hearing and hearing people to experience the same song, at the same moment, together.",
    "« Une chanson ne s'écoute pas seulement. Elle se regarde, elle se ressent. »": "“A song isn't only something you hear. You watch it, you feel it.”",
    "Tim, fondateur de TimChantSigne": "Tim, founder of TimChantSigne",
    "Prochains concerts": "Upcoming concerts",
    "nov.": "Nov",
    "déc.": "Dec",
    "Soirée chansigne acoustique": "Acoustic sign-song evening",
    "Le Petit Théâtre, Lyon · 20 h 30": "Le Petit Théâtre, Lyon · 8:30 pm",
    "Places disponibles": "Tickets available",
    "Parc de la Tête d'Or, Lyon · 18 h": "Parc de la Tête d'Or, Lyon · 6 pm",
    "Dernières places": "Last tickets",
    "Concert de Noël signé": "Signed Christmas concert",
    "Salle des fêtes, Villeurbanne · 15 h": "Community hall, Villeurbanne · 3 pm",
    "Complet": "Sold out",
    "Travaillons ensemble": "Let's work together",
    "Choisissez votre activité, puis décrivez votre projet. Vous pouvez aussi réserver un appel pour en parler de vive voix.": "Choose an activity, then tell us about your project. You can also book a call to talk it through.",
    "Spectacles": "Shows",
    "Ateliers": "Workshops",
    "Interventions en structure": "On-site sessions",
    "Spectacles et concerts": "Shows and concerts",
    "Un concert entièrement chansigné, ou une interprétation en langue des signes pour votre événement, en solo ou aux côtés d'artistes.": "A fully signed concert, or sign language interpreting for your event, solo or alongside other artists.",
    "Concert chansigné de 45 min à 1 h 30": "Signed concert from 45 min to 1 h 30",
    "Interprétation d'un festival ou d'une cérémonie": "Interpreting for a festival or ceremony",
    "Répertoire adapté à votre public": "Repertoire tailored to your audience",
    "Tarif sur devis.": "Price on request.",
    "Chaque prestation est adaptée à votre projet, à votre public et à votre lieu.": "Every service is tailored to your project, your audience and your venue.",
    "Prendre rendez-vous": "Book a call",
    "Demande de devis": "Quote request",
    "Nom": "Name",
    "E-mail": "Email",
    "Type de spectacle": "Type of show",
    "Concert chansigné": "Signed concert",
    "Interprétation d'un événement": "Event interpreting",
    "Première partie": "Opening act",
    "Autre": "Other",
    "Date souhaitée": "Preferred date",
    "Lieu": "Location",
    "Public attendu": "Expected audience",
    "Votre projet": "Your project",
    "(facultatif)": "(optional)",
    "Envoyer la demande": "Send request",
    "Merci, votre demande est bien envoyée. Réponse sous 48 h.": "Thank you, your request has been sent. We reply within 48 hours.",
    "Ateliers de chansigne": "Sign-song workshops",
    "Des ateliers pour découvrir la langue des signes par la musique. Aucun prérequis : on commence par le rythme, les gestes viennent ensuite.": "Workshops to discover sign language through music. No prior knowledge needed: we start with rhythm, the signs come next.",
    "Initiation ponctuelle de 2 h": "One-off 2-hour introduction",
    "Cycle sur plusieurs semaines": "Course over several weeks",
    "Stage pendant les vacances": "Holiday workshop",
    "Type d'atelier": "Type of workshop",
    "Initiation": "Introduction",
    "Cycle": "Course",
    "Stage": "Holiday workshop",
    "Participants": "Participants",
    "Écoles, mairies et entreprises": "Schools, town halls and companies",
    "Des interventions sur site pour sensibiliser à la surdité et à la culture sourde, avec un programme construit avec vous.": "On-site sessions to raise awareness of deafness and Deaf culture, with a programme built together with you.",
    "Écoles, collèges et centres de loisirs": "Schools and youth centres",
    "Mairies et médiathèques": "Town halls and libraries",
    "Entreprises et associations": "Companies and non-profits",
    "Type de structure": "Type of organisation",
    "École ou établissement scolaire": "School",
    "Mairie ou collectivité": "Town hall or local authority",
    "Entreprise": "Company",
    "Association": "Non-profit",
    "Nombre de personnes": "Number of people",
    "Témoignages": "Testimonials",
    "Ils en parlent": "What people say",
    "« Pour la première fois, j'ai vécu un concert en même temps que mes amis entendants. Un moment inoubliable. »": "“For the first time, I experienced a concert at the same time as my hearing friends. An unforgettable moment.”",
    "spectatrice sourde": "Deaf audience member",
    "« L'atelier a transformé ma façon d'écouter la musique. Je ne m'attendais pas à autant d'émotion. »": "“The workshop changed the way I listen to music. I didn't expect it to be so moving.”",
    "élève du cycle trimestriel": "term course student",
    "« Une intervention bienveillante et joyeuse. Nos élèves en parlent encore des semaines après. »": "“A kind and joyful session. Our pupils were still talking about it weeks later.”",
    "professeure des écoles": "primary school teacher",
    "Ne ratez aucune": "Never miss a",
    "chanson": "song",
    "Une lettre par mois avec les nouvelles vidéos, les dates de concert et les ouvertures d'ateliers.": "One email a month with new videos, concert dates and workshop openings.",
    "Je m'inscris": "Sign me up",
    "© 2026 TimChantSigne. Contenu fictif pour test.": "© 2026 TimChantSigne. Placeholder content for testing.",
    "Mentions légales": "Legal notice",
    "Vos données servent uniquement à répondre à votre demande.": "Your data is only used to reply to your request.",
    "En savoir plus": "Learn more",
    "Retour à l'accueil": "Back to home",
    "Accessibilité": "Accessibility",
    "Contact": "Contact",
    "Navigation principale": "Main navigation",
    "Langue": "Language",
    "Logo TimChantSigne : deux mains et une note de musique": "TimChantSigne logo: two hands and a musical note",
    "Chiffres clés": "Key figures",
    "Activités": "Activities",
    "Ville": "City",
    "Votre adresse e-mail": "Your email address",
    "Adresse e-mail": "Email address",
    "Liens secondaires": "Secondary links",
    "Aller au contenu": "Skip to content",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Suivre Tim": "Follow Tim",
    "TimChantSigne | Chansigne, concerts et ateliers en langue des signes": "TimChantSigne | Sign-song concerts and workshops in sign language",
    "Mentions légales | TimChantSigne": "Legal notice | TimChantSigne"
};
const ATTRIBUTS = ['placeholder', 'aria-label', 'alt', 'title'];
const normaliser = t => t.replace(/\s+/g, ' ').trim();
const originaux = new Map();

function traduire(langue) {
    const marcheur = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: n => n.parentElement.closest('script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    for (let n = marcheur.nextNode(); n; n = marcheur.nextNode()) {
        if (!originaux.has(n)) originaux.set(n, n.nodeValue);
        const fr = originaux.get(n);
        const cle = normaliser(fr);
        if (!cle || !(cle in EN)) continue;
        n.nodeValue = langue === 'en' ? fr.replace(fr.trim(), EN[cle]) : fr;
    }
    document.querySelectorAll('[' + ATTRIBUTS.join('],[') + ']').forEach(el => {
        ATTRIBUTS.forEach(a => {
            if (!el.hasAttribute(a)) return;
            const sauvegarde = 'data-fr-' + a;
            if (!el.hasAttribute(sauvegarde)) el.setAttribute(sauvegarde, el.getAttribute(a));
            const fr = el.getAttribute(sauvegarde);
            el.setAttribute(a, langue === 'en' && normaliser(fr) in EN ? EN[normaliser(fr)] : fr);
        });
    });
    if (!originaux.has(document)) originaux.set(document, document.title);
    const titreFr = originaux.get(document);
    document.title = langue === 'en' && titreFr in EN ? EN[titreFr] : titreFr;
    document.querySelectorAll('[data-langue]').forEach(el => { el.hidden = el.dataset.langue !== langue; });
    document.documentElement.lang = langue;
    document.querySelectorAll('.langues a').forEach(a => {
        a.setAttribute('aria-current', a.lang === langue ? 'true' : 'false');
    });
    try { localStorage.setItem('langue', langue); } catch (e) {}
}

document.querySelectorAll('.langues a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        traduire(a.lang);
    });
});

let langueSauvee = null;
try { langueSauvee = localStorage.getItem('langue'); } catch (e) {}
if (langueSauvee === 'en') traduire('en');

// Ancre vers un bloc traduit (ex. #donnees devient #donnees-en en anglais)
if (location.hash && document.documentElement.lang !== 'fr') {
    const cible = document.getElementById(location.hash.slice(1) + '-' + document.documentElement.lang);
    if (cible) cible.scrollIntoView();
}
