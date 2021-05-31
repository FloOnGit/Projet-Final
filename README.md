Description du projet :
Ce projet était initialement conçut pour être programmé en Python cependant il était important que nos programmes soient éxécutables depuis un site internet. Nous avons donc 
essayé de traduire plus ou moins nos programmes python en p5 voire javascript pour qu'ils soient "compatibles" avec une page web. Notre projet était de programmer un 
timer/countdown, chose faite en python,P5 et Js. Le timer consiste tout simplement de faire office de chronomètre avec deux options "Marche,Arrêt". Le countdown lui, fait office
de minuteur, nous pouvons donc choisir un temps défini qui s'écoulera et s'arrêtera une fois le temps selectionné abouti. Lors de la conception du programme nous avons eu l'idée 
de programmer une horloge en temps réel. La version finale du projet est un site internet (en html) ayant l'horloge en temps réel sur la page principale, deux liens sont implantés
à gauche et à droite de celle-ci, ces derniers mènent à deux autres pages dans lesquels sont présent le timer et le countdown, chaque programmes à sa page html respective.

Expliquation d'une partie d'un des programmes :

Description du projet :
Ce projet était initialement conçut pour être programmé en Python cependant il était important que nos programmes soient éxécutables depuis un site internet. Nous avons donc 
essayé de traduire plus ou moins nos programmes python en p5 voire javascript pour qu'ils soient "compatibles" avec une page web. Notre projet était de programmer un 
timer/countdown, chose faite en python,P5 et Js. Le timer consiste tout simplement de faire office de chronomètre avec deux options "Marche,Arrêt". Le countdown lui, fait office
de minuteur, nous pouvons donc choisir un temps défini qui s'écoulera et s'arrêtera une fois le temps selectionné abouti. Lors de la conception du programme nous avons eu l'idée 
de programmer une horloge en temps réel. La version finale du projet est un site internet (en html) ayant l'horloge en temps réel sur la page principale, deux liens sont implantés
à gauche et à droite de celle-ci, ces derniers mènent à deux autres pages dans lesquels sont présent le timer et le countdown, chaque programmes à sa page html respective.

Expliquation d'une partie d'un des programmes (Florian) :

function setup() {

    créer une fenêtre de la taille sélectionnée (1400 par 500)

  createCanvas(1400,500);
  }
  
  
  
  function draw() {
  
    défini la couleur de l'arrière plan
  
  background(0);
    
    Règle l'épaisseur du trait
  
  strokeWeight(4);
    
  
    Obtient les heures,minutes,secondes en temps réel et les attribues aux variables "var"
  var sec = second();
  var min = minute();
  var hrs = hour();
    
    Variable affichant "AM ou "PM" en fonction de l'heures, si c'est par exemple 5 heures du matin (AM) ou 5 heures de l'après midi (PM)
  
  var mer = hrs < 12 ? "AM":"PM";
    
    Formate le temps et ajoute des 0 si nécéssaire 
  
  sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs % 12);

 
    Sélectionne la couleur de la police
  fill(255, 109, 11);
    
    Sélectionne la taille de la police
  textSize(60);
  
  
  
    Aligne le texte au centre
  textAlign(CENTER, CENTER);
    
    Affiche le temps 
 
  text(hrs + ":" + min + ":" + sec +
    " " + mer, width/2, height/5);
  }
  
  
    Fonction qui ajoute au temps des 0 ex : (0.8;0.7....)
  
  function formatting(num){
    
    Converti en int et vérifie si c'est inférieur à 10
  
  if(int(num) < 10) {
    
    Retourne le numéro rembourré
   return "0" + num;
  }
    
  
    Retourne le numéro original si le rembourrage n'est pas requis 
  return num;
  }



Alexis- page html:
  Le probleme principal du site etait d'afficher plusieurs programmes sans que sa prenne trop de place et que la naviguation a travers le site reste agréable. Alors on a implémenter des boutons qui permettent d'aller sur une deuxieme page. Ainsi il est possible de changer de programme a l'aide d'un bouton tout en gardant une page sobre et bien organisée.
  Ceci s'est organisé a l'aide des liens attribués aux boutons mis en haut de la page (ligne du programme 26) ce bouton permet de changer de ficher html dans le dossier.
  

- L'ajout d'une sonnerie au countdown permettant de faire office d'un minuteur utilisable pour faire plusieurs tâches en même temps par exemple.
- Un réveil
- Un programme relant toutes les heures,fuseaux horraires de chaques villes, pays.
