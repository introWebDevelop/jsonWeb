let outputElement = document.getElementById('outputElement')
let outputParagraph = document.getElementById('outputParagraph')
let contentGridElement = document.getElementById('contentGridElement')


let myJSON =  [
	{
	"title" : "Micheal Jackson",
	"image_url" : "https://m.media-amazon.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1_FMjpg_UX1000_.jpg",
	"favorite_color" : "red",
	"birthday": 1958,
	}, 
	{
	"title" : "Eminem",
	"image_url" : "https://media.npr.org/assets/music/news/2010/06/eminem_wide-9bf03a4bfc100c7218ffa3c8d9f8099bcc994bff-s1400-c100.jpg",
	"favorite_color" : "light-blue"
	"birthday" : 1972,
	},
	{
	"title" : "The Oh Hellos",
	"image_url" : "https://radioutd.com/blog/wp-content/uploads/2018/04/The-Oh-Hellos.jpg",
	"favorite_color" : "white"
	"birthday": 2011,
	}, 
]


function createElementProper(incomingJSON) {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
	newContentElement.classList.add('contentItem');

	let newContentHeading = document.createElement("H3");
	newContentHeading.classList.add('title');
	newContentHeading.innerText = incomingJSON['title'];
	newContentElement.appendChild(newContentHeading);

	let newContentSubhead = document.createElement("H4");
	newContentSubhead.innerText = "Birthday:";
	newContentElement.appendChild(newContentSubhead);

	let newImage = document.createElement("IMG");
	newImage.classList.add("footerImage");
	newImage.src = incomingJSON['image_url'];
	newContentElement.appendChild(newImage);

}