// I. chercher les données / accèder à la liste
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", 'http://localhost:9999/api/eleves', false)
xmlhttp.send()

if (xmlhttp.status === 200) {
	console.log('Réponse reçue:')
} else {
	console.log('Status de la reponse: %d (%s)', xmlhttp.status, xmlhttp.statusText)
}

// II. Parcourir et manipuler des données
maListeEleves = JSON.parse(xmlhttp.response)

// III. Modification du DOM
var tableau = window.document.getElementById("tableau_eleves")

for(var eleve in maListeEleves){
	console.log( maListeEleves[eleve].nom)
	var newA = document.createElement('a')
	var newLi = document.createElement('li')
	newLi.innerHTML = maListeEleves[eleve].prenom + ' ' + maListeEleves[eleve].nom;
	newA.setAttribute('href', '/eleve/' + maListeEleves[eleve]._id)
	newA.appendChild(newLi)
	tableau.appendChild(newA)
}
