const img = []
const prise = ['coffe machine','iphone','meat grinder','computer','ps5','earpiece','gopro','lamp','fridge','tv','toster']
const json_prise = {
	'coffe machine':'https://main-cdn.goods.ru/big1/hlr-system/1659850/100022954762b0.jpg',
	'iphone':'https://img.artencraft.be/i/3237760.jpg',
	'meat grinder':'https://poood.ru/img/goods/homeware/kitchen_appliances/meat_grinders/moulinex_me858d32_2100vt_serebristiy_1.jpg',
	'computer':'https://img2.freepng.ru/20180418/rcq/kisspng-laptop-gaming-computer-personal-computer-pci-expre-pc-5ad785ee57efb2.6645359315240739663602.jpg',
	'ps5':'https://vgtimes.ru/uploads/posts/2020-09/70482_4_3.jpg',
	'earpiece':'https://items.s1.citilink.ru/1133290_v01_b.jpg',
	'gopro':'https://cdn.svyaznoy.ru/upload/iblock/bcf/hero5_black_1.jpg',
	'lamp':'https://svetkoff.ru/upload/iblock/7ce/vokruglamp_nastolnaya_lampa_eglo_laroa_96438.jpeg',
	'fridge':'https://www.lostelecom.ru/image/catalog/shirokie-holodilniki-folder/5/ru-Pdb-20055557b.jpg',
	'tv':'https://laukar.com/data/191207/11640447063539491.jpeg',
	'toster':'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/106122/1_106122.jpg',
}
const time = {}
const json_val = {}

var b = 0
function randprisespown(prise, json_prise){
	const rand = Math.floor(Math.random() * prise.length)
	const rand_json_prise = json_prise[prise[rand]]
	return rand_json_prise
}
function randval() {
	const a = Math.floor(Math.random() * (30 - 10)) * 100;
	return a //-
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
	for (let i = 0; i < 51; i++) {
		const e = randprisespown(prise, json_prise)
		const c = String(i)
		const d = 5100-(5100-b)
		time[d] = i
		json_val[d] = e
		b += 100
		$('.res').append('&nbsp;<div class="style" id="'+i+'"><img width="90px" height="90px" src="'+e+'"></div>')
	}
	
	$('#cl').on('click',function(){
		async function delayed(time) {
			const randval_1 = -randval()//-
			$('.res').animate({marginLeft: randval_1+"px",}, 3000) //-
			await sleep(3000)
			const json_val_con = json_val[-randval_1+200]
			$('#spown').append('<img height="1000px" class="val style_1" src="'+json_val_con+'">')
			$('.val').animate({height: "200px",}, 3000)
			await sleep(3000)
			$('.val').fadeToggle()
			await sleep(1000)
			$('.val').remove()
		}
		delayed(time)
	})
})