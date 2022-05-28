let dateGlobale = new Date();

let annee = dateGlobale.getFullYear();
let mois = dateGlobale.getMonth();
let jour = dateGlobale.getDate();
let jour_semaine = dateGlobale.getDay();

let MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "novembre",
  "octobre",
  "décembre",
];

let JOUR_SEMAINE = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

mois = MOIS[mois];
jour_semaine = JOUR_SEMAINE[jour_semaine];

console.log(
  (document.getElementById("showdate").innerHTML =
    jour_semaine + " " + jour + " " + mois + " ")
);
