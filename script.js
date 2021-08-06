const quotes = [
	{
		"name" : "Happy Customer",
		"job" : "Vlogger",
		"image" : "image/profil.png",
		"text" : "Bahannya adem banget dan gak nyangka pengirimannya juga cepet banget, worth it sama harganya, the best deh pokoknya."
	},
	{
		"name" : "Joyful customer",
		"job" : "Atlet",
		"image" : "image/profil.png",
		"text" : "Bahnnya enak bangett ga panas, packaging nya juga aman banget, suka deh pokoknya!"
	},
	{
		"name" : "Another Happy Customer",
		"job" : "Web Developer",
		"image" : "image/profil.png",
		"text" : "Packagingnya rapih dan bajuny memiliki kualitas bahan yang sangat baik."
	},
	{
		"name" : "Delighted Customer",
		"job" : "Designer",
		"image" : "image/profil.png",
		"text" : "Bahannya adem pengirimannya cepat, mantep lah pokoknya."
	},
	{
		"name" : "Pleased Customer",
		"job" : "Programmer",
		"image" : "image/profil.png",
		"text" : "Akhirnya dateng juga!! Produk sesua pesanan, bahannya adem+wangi banget dong, dapet bonus stiker juga. Good Job!"
	}
];

// console.log(quotes[0].name);

// cek jika halaman telah diload maka jalankan fungsi getContent
document.addEventListener('DOMContentLoaded', getContent)

const name = document.getElementById('name')
const image = document.getElementById('image')
const text = document.getElementById('text')

const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const randomButton = document.getElementById('random')

let currentIndex = 0;

// fungsi jika mencet tombol next
nextButton.addEventListener('click', function () {
	currentIndex++;

	cekIndex();

	getContent();
})

prevButton.addEventListener('click', function () {
	currentIndex--;

	cekIndex();
	getContent();
})



// fungsi mengubah nama, job, image, text di dalam html
function getContent() {
	name.textContent = quotes[currentIndex].name;
	
	image.src = quotes[currentIndex].image;
	text.textContent = quotes[currentIndex].text;
}

function cekIndex() {
	if (currentIndex >  quotes.length - 1) {
		currentIndex = 0;
	}else if(currentIndex < 0){
		currentIndex = quotes.length - 1;
	}
}
