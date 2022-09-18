window.onload = function(){
	//check the storage for cart items..
	//pull the cart items out if they are stored..
	shopping_cart = localStorage.getItem('shopping-cart');
	cart_count = document.getElementById("cart_count");
	if(shopping_cart == null || shopping_cart == undefined){
		//No items stored 
		cart_count.innerText = 0;

	}else{

		shopping_cart = JSON.parse(shopping_cart);

		if(shopping_cart.length == 0){
			
			//No items stored
			cart_count.innerText = 0;
		}else{

			//Items stored ..
			cart_count.innerText = shopping_cart.length;
		}
	}


}


const products = document.querySelectorAll(".product");

products.forEach((product) =>{

	//console.log(product.children);
	/*
	product_name = product.children[1].innerText;
	product_price = product.children[2].innerText;

	add_to_cart_btn = product.children[3].children[0];


	add_to_cart_btn.onclick = function(e){
		//console.log(product.children[1].innerText);
		
	}*/

	product.children[3].children[0].addEventListener("click", function(){


		product_name = product.children[1].innerText;
		product_price = product.children[2].innerText;
		product_image = product.children[0];

		console.log(product_name);
		console.log(product_price);

		cart_item = {
			'product_name': product_name,
			'product_price': product_price,
			'product_image': product.children[0].children[0].src
		}


		//get this product and add to cart
		let shopping_cart = localStorage.getItem('shopping-cart');

		if(shopping_cart == null || shopping_cart == undefined){
			//the shopping cart does not exist
			//create it..
			
			shopping_cart = [];

			shopping_cart.push(cart_item);

			shopping_cart = JSON.stringify(shopping_cart);

			//save
			localStorage.setItem("shopping-cart", shopping_cart);

			alert("Added to Cart");

			location.reload();



		}else{
			//the shopping cart exists
			shopping_cart = JSON.parse(shopping_cart);

				shopping_cart.push(cart_item);

				localStorage.setItem("shopping-cart", JSON.stringify(shopping_cart));

				alert("Added to Cart");

				location.reload();

		}


	})
})


const cart_count_element = document.getElementById("cart_count");

//attach css class
cart_count_element.parentElement.classList.add("cart_count");


cart_count_element.parentElement.addEventListener("click", function(){

	let cart_items_container = document.querySelector(".cart_items_container");

	cart_items_container.style.display = "block";


	//go to the localStorage 

	stored_items = localStorage.getItem("shopping-cart");

	cart_items_element = document.querySelector(".cart_items");



	if(stored_items != null){
		//get the items ..
		
		stored_items = JSON.parse(stored_items);

		if(stored_items.length == 0){
			//there are no items...
			cart_items_element.innerText = "No item in cart";
		}else{

			//there is at least one item
			code = ``;
			for(let i = 0; i < stored_items.length; i++){
				

				code += `<div class='product'>
							<div class='product-image'>
								<img src='${stored_items[i]['product_image']}'>
	
							</div>
							<h5>${stored_items[i]['product_name']}</h5>
							<h6>Price: ${stored_items[i]['product_price']}</h6>
						</div><hr>`

				
			}

			cart_items_element.innerHTML = code;


		}

	}else{
		//there are no items
		cart_items_element.innerText = "No item in cart";
	}

})


