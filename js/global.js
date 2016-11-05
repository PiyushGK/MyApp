
var Data = [
	{
		"userName":"piyush", 
	 "password":"piyush"
	}
  ];


var Items = [
			   {
				  "ItemName":"Watch",
				  "ItemPrice":"Rs.5000",
				  "InStock":"Yes"
			   },
			   {
				  "ItemName":"Mobile",
				  "ItemPrice":"Rs.15000",
				  "InStock":"Yes"
			   },
			   {
				  "ItemName":"Tablet",
				  "ItemPrice":"Rs.8000",
				  "InStock":"Yes"
			   },
			   {
				  "ItemName":"iPod",
				  "ItemPrice":"Rs.1000",
				  "InStock":"No"
			   }
		    ];

var selectedItems = [];
var cartItems= [];

function myFunction() {
    var userName = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;

	if (userName == Data[0].userName && pwd == Data[0].password) {
		 window.location.href = 'home.html';
	}
	else {
		document.getElementById("failureMsg").innerHTML = "Please enter correct userName & password ." ;
	}
}

var text = "";
function DataDisplay(){

	for (var i = 0; i < Items.length; i++) {
   		 text += "ItemName: "  + Items[i].ItemName + "<br>";
    	 text += "ItemPrice: " + Items[i].ItemPrice + "<br>";
      	 text += "In Stock: " + Items[i].InStock + "<br>" ;
      	 text += "<button onclick='addToCart("+i+")' class='btn btn-info'>Select Product</button>" +"<br>" +"<br>";
    }
       document.getElementById("item").innerHTML = text; 
}

var myCartItems;

function addToCart(k){ 
    var itemSelected ;
	for (var i = 0; i < Items.length; i++) {
		selectedItems = [];
	    itemSelected = function(k){
			 return function(){  
				selectedItems.push(Items[k]);
			 }(); 
	   }(k);
	   break;
	};  
	myCartItems = [];
	myCartItems = selectedItems;
	myCart(myCartItems);
}
var myCartHtml = '';

function myCart(){
	//console.log(myCartItems);

	for (var i = 0; i < myCartItems.length; i++) {
   		 myCartHtml += "ItemName: "  + myCartItems[i].ItemName + "<br>";
    	 myCartHtml += "ItemPrice: " + myCartItems[i].ItemPrice + "<br>";
      	 myCartHtml += "In Stock: " + myCartItems[i].InStock + "<br>" ;
      	 myCartHtml += "<button onclick='removeCart()' class='btn btn-info'>Remove Product</button>" +"<br>" +"<br>";
      	   break;
    }

    document.getElementById("itemsInCart").innerHTML = myCartHtml;
};

/*function removeCart(i){
	var index = myCartItems.indexOf(i);
	if (index > -1) {
		myCartItems.splice(index, 1);
	};
	
    document.getElementById("itemsInCart").innerHTML = myCartItems;
}*/

var newCart;

function emptyCart(){
	myCartHtml = [];
	alert("Do you want to remove all the Items from your Cart..??");
	newCart = myCartItems.splice(0,myCartItems.length);

	 document.getElementById("itemsInCart").innerHTML = newCart ;
}


/*VALIDATIONS*/


function validate(){

	var cust_name = document.getElementById("cName");
	var mob_no = document.getElementById("mobNo");
	var email_id = document.getElementById("email");
	var address = document.getElementById("addr");
	var pin_code = document.getElementById("pinCode");

	var name_pat = /^([A-z a-z]{3,20})+$/;
	var mobNo_pat = /^([7-9]{1}[0-9]{9})+$/ ;		
	var Email_pat = /^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{3,3})+$/;
	var addr_pat = /^([A-z a-z]{3,50})+$/;
	var pin_pat = /^([1-9]{1}[0-9]{5})+$/ ;

		if(!name_pat.test(cust_name.value))
		{
		document.getElementById("name_msg").innerHTML = "Please enter name in proper format .";
		
		cust_name.value="";
		return false;
		}
		else{
			document.getElementById("name_msg").innerHTML = "";
		}

		if(!mobNo_pat.test(mob_no.value))
		{
		document.getElementById("Mob_msg").innerHTML = "Please enter valid Mobile No .";
		mob_no.focus();
		mob_no.value="";
		return false;
		}
		else{
			document.getElementById("Mob_msg").innerHTML = "";
		}

			if(!Email_pat.test(email_id.value))
		{
		document.getElementById("email_msg").innerHTML = "Please enter valid Email_Id .";
		email_id.focus();
		email_id.value="";
		return false;
		}
		else{
			document.getElementById("email_msg").innerHTML = "";
		}

		if(!addr_pat.test(address.value))
		{
		document.getElementById("addr_msg").innerHTML = "Address should be less than 50 words ." ;
		address.focus();
		address.value="";
		return false;
		}
		else{
			document.getElementById("addr_msg").innerHTML = "";
		}

		if(!pin_pat.test(pin_code.value))
		{
		document.getElementById("pin_msg").innerHTML = "Pin code should not start with 0 .";
		pin_code.focus();
		pin_code.value="";
		return false;
		}
		else{
			document.getElementById("pin_msg").innerHTML = "";
		}
}
