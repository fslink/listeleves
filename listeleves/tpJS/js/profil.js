var url = location.href
var table = url.split('/')
console.log(table[4])

if(table.length == 5){
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.open("GET", 'http://localhost:9999/api/eleve/' +  table[4], false)
	xmlhttp.send()

	if (xmlhttp.status === 200) {
		console.log('Réponse reçue:')
	} else {
		console.log('Status de la reponse: %d (%s)', xmlhttp.status, xmlhttp.statusText)
	}

	// II. Parcourir et manipuler des données
	var eleve = JSON.parse(xmlhttp.response)
	console.log(eleve)


	var tableau = document.getElementById('tableau_profil');

	var newLineNom = document.createElement('li');
	newLineNom.innerHTML = '<strong>Nom : </strong>' + eleve.nom;

	var newLinePrenom = document.createElement('li');
	newLinePrenom.innerHTML = '<strong>Prénom : </strong>' + eleve.prenom;

	var newLineAge = document.createElement('li');
	newLineAge.innerHTML = '<strong>Age : </strong>' + eleve.age;

	var newLineVille = document.createElement('li');
	newLineVille.innerHTML = '<strong>Ville : </strong>' + eleve.ville;

	var newLineJavascript = document.createElement('li');
	newLineJavascript.innerHTML ='<strong>Javascript : </strong>' + eleve.javascript;

	var newLineFav_web = document.createElement('li');
	newLineFav_web.innerHTML = '<strong>Site web favori : </strong>' + eleve.fav_web;

	var newLineFav_web_why = document.createElement('li');
	newLineFav_web_why.innerHTML = '<strong>Pourquoi site web favori : </strong>' + eleve.fav_web_why;

	var newLineFav_app = document.createElement('li');
	newLineFav_app.innerHTML = '<strong>App favorite : </strong>' + eleve.fav_app;

	var newLineFav_app_why = document.createElement('li');
	newLineFav_app_why.innerHTML = '<strong>Pourquoi app favorite: </strong>' + eleve.fav_app_why;

	var newLineBefore_ifa = document.createElement('li');
	newLineBefore_ifa.innerHTML = '<strong>Avant IFA : </strong>' + eleve.before_ifa;

	var newLineWhy_ifa = document.createElement('li');
	newLineWhy_ifa.innerHTML = '<strong>Pourquoi l\'IFA : </strong>' + eleve.why_ifa;

	var newLineContact_mail = document.createElement('li');
	newLineContact_mail.innerHTML = '<strong>Mail: </strong>' + eleve.contact_mail;

	tableau.appendChild(newLineNom);
	tableau.appendChild(newLinePrenom);
	tableau.appendChild(newLineAge);
	tableau.appendChild(newLineVille);
	tableau.appendChild(newLineJavascript);
	tableau.appendChild(newLineFav_web);
	tableau.appendChild(newLineFav_web_why);
	tableau.appendChild(newLineFav_app);
	tableau.appendChild(newLineFav_app_why);
	tableau.appendChild(newLineBefore_ifa);
	tableau.appendChild(newLineContact_mail);

} else {
	var container = document.getElementById('container')
	container.innerHTML = "Requête URL non conforme";
}
