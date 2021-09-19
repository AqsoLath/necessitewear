// const latest = document.getElementById('hover-latest');

// const colProduct = document.querySelectorAll('.col-product');
// const imgProduct = colProduct[0].querySelectorAll('img');





// 	colProduct.forEach(function (product) {
// 		product.onmouseover =  function(e){
// 			console.log(imgProduct.src);
// 	}
// 		product.onmouseout = function () {
// 			product.style.color = 'black'
// 		}
// })

const imageDepan = ["245-depan.jpg", "246-depan.jpg", "ali-depan.jpg", "sunflower-depan.jpg", "pablo-depan.jpg", "japan-depan.jpg"];
const imageBelakang = ["245-belakang.jpg", "246-belakang.jpg", "ali-belakang.jpg", "sunflower-belakang.jpg", "pablo-belakang.jpg", "japan-belakang.jpg"];

// const product2 = document.getElementById('product2');
// const image2 = document.getElementById('image2');




function hover(product, image, kaosdepan, kaosbelakang) {

	product.onmouseover = function () {
		image.src = 'image/' + kaosbelakang;
	}
	product.onmouseout = function () {
		image.src = 'image/' + kaosdepan;
	}
}

hover(product1, image1, imageDepan[0], imageBelakang[0]);
hover(product2, image2, imageDepan[1], imageBelakang[1]);
// hover(product3, image3, imageDepan[0], imageBelakang[0]);
// hover(product4, image4, imageDepan[0], imageBelakang[0]);
hover(product5, image5, imageDepan[0], imageBelakang[0]);
hover(product6, image6, imageDepan[1], imageBelakang[1]);
hover(product7, image7, imageDepan[2], imageBelakang[2]);
hover(product8, image8, imageDepan[3], imageBelakang[3]);



// const imgKaos = document.querySelectorAll('.product .kaos');

// const products = document.querySelectorAll('.product');

// products[0].onmouseover = function () {
// 	imgKaos[0].src = 'image/kaosbelakang.png';
// }


// products.forEach(function(product) {
// 	product.onmouseover = function (){
// 			imgKaos[1].src = 'image/kaosbelakang.png';	
// 	}
// })




// products.forEach(function (product) {
// 	product.addEventListener('mouseover', function () {
// 	// imgKaos[1].src = 'image/' + imageBelakang[0] ;
// 	imgKaos.forEach(function (kaos) {
// 		console.log(kaos.target);
// 		// kaos.target.src = 'image/' + imageBelakang[0];
// 	})

// })
// })

// products[0].addEventListener('mouseout', function () {
// 	imgKaos[0].src = 'image/' + imageDepan[0];
// })