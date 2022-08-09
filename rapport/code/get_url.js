let liens = document.querySelectorAll(".ZZ7G7b");

urls = [];

for(let i=0; i<liens.length; i++) {
    urls.push(liens[i].href)
}

let texte = ""

for(let i=0; i < urls.length; i++) {
    texte += urls[i] + "<==>"
}

let fichier = document.querySelector("input.og3lId").value;
fichier = fichier.replace(" ", "_")

const telecharger = (contenu, nomDuFichier, contentType) => {
 const a = document.createElement("a");
 const fichier = new Blob([contenu], { type: contentType });
 a.href = URL.createObjectURL(fichier);
 a.download = nomDuFichier;
 a.click();
}

const lancerTelechargement = () => telecharger(JSON.stringify(texte), fichier+".txt", "text/plain");


lancerTelechargement()