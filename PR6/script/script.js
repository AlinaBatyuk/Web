const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://semegenkep.github.io/json/example.json'

const request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = 'json'
request.send()

request.onload = function() {
	const superHeroes = request.response
	populateHeader(superHeroes)
	showHeroes(superHeroes)
	// console.log(superHeroes)
}

function populateHeader(heroes){
	const h1 = document.createElement('h1')
	h1.textContent = heroes.squadName
	header.append(h1)
	const note = document.createElement('p')
	note.textContent = "Hometown: "+ heroes.homeTown + " // Formed: " + heroes.formed
	header.append(note)
}

function showHeroes(show){
	console.log(show)
	const article = document.createElement('article')
	const article1 = document.createElement('article')
	const article2 = document.createElement('article')
	section.append(article, article1, article2)
	const h2 = document.createElement('h2')
	h2.textContent = show.members[0].name
	article.append(h2)
	
	const description = document.createElement('p')
	description.textContent = "Secret identity: " + show.members[0].secretIdentity
	
	const description1 = document.createElement('p')
	description1.textContent = "Age: " + show.members[0].age

	const description3 = document.createElement('p')
	description3.textContent = "Superpowers: "
	article.append(description, description1, description3)

	const naw = document.createElement('naw')
	const ul = document.createElement('ul')
	const li = document.createElement('li')
	li.textContent = show.members[0].powers[0]
	const li1 = document.createElement('li')
	li1.textContent = show.members[0].powers[1]
	const li2 = document.createElement('li')
	li2.textContent = show.members[0].powers[2]
	article.append(naw)
	naw.append(ul)
	ul.append(li, li1, li2)

	const madame = document.createElement('h2')
	madame.textContent = show.members[1].name
	article1.append(madame)
	
	const description4 = document.createElement('p')
	description4.textContent = "Secret identity: " + show.members[1].secretIdentity
	
	const description5 = document.createElement('p')
	description5.textContent = "Age: " + show.members[1].age

	const description6 = document.createElement('p')
	description6.textContent = "Superpowers: "
	article1.append(description4, description5, description6)

	const naw1 = document.createElement('naw')
	const ul1 = document.createElement('ul')
	const li3 = document.createElement('li')
	li3.textContent = show.members[1].powers[0]
	const li4 = document.createElement('li')
	li4.textContent = show.members[1].powers[1]
	const li5 = document.createElement('li')
	li5.textContent = show.members[1].powers[2]
	article1.append(naw1)
	naw1.append(ul1)
	ul1.append(li3, li4, li5)

	const eternal = document.createElement('h2')
	eternal.textContent = show.members[2].name
	article2.append(eternal)
	
	const description7 = document.createElement('p')
	description7.textContent = "Secret identity: " + show.members[2].secretIdentity
	
	const description8 = document.createElement('p')
	description8.textContent = "Age: " + show.members[2].age

	const description9 = document.createElement('p')
	description9.textContent = "Superpowers: "
	article2.append(description7, description8, description9)

	const naw2 = document.createElement('naw')
	const ul2 = document.createElement('ul')
	const li6 = document.createElement('li')
	li6.textContent = show.members[2].powers[0]
	const li7 = document.createElement('li')
	li7.textContent = show.members[2].powers[1]
	const li8 = document.createElement('li')
	li8.textContent = show.members[2].powers[2]
	const li9 = document.createElement('li')
	li9.textContent = show.members[2].powers[3]
	article2.append(naw2)
	naw2.append(ul2)
	ul2.append(li6, li7, li8, li9)
}