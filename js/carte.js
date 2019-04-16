var lat = 44.837789; // initialise la latitude et la longitude sur Bordeaux
var lon = -0.57918;
var macarte = null;
	// Fonction d'initialisation de la carte
	function initMap() {
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "carte"
        macarte = L.map("carte").setView([lat, lon], 11);
        // openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 30    
            }).addTo(macarte);
            }
			window.onload = function(){
				// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
				initMap(); 
			};