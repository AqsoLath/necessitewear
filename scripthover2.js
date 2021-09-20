const imageDepan = ["abp1-depan.jpg", "abp2-depan.jpg", "ali-depan.jpg", "sunflower-depan.jpg", "pablo-depan.jpg", "japan-depan.jpg"];
const imageBelakang = ["abp1-belakang.jpg", "abp2-belakang.jpg", "ali-belakang.jpg", "sunflower-belakang.jpg", "pablo-belakang.jpg", "japan-belakang.jpg"];

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
hover(product5, image5, imageDepan[2], imageBelakang[2]);
hover(product6, image6, imageDepan[3], imageBelakang[3]);
hover(product7, image7, imageDepan[4], imageBelakang[4]);
hover(product8, image8, imageDepan[5], imageBelakang[5]);



