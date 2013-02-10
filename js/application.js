
var country,language,currency,subject,data;

function findProducts(){	
		currency = document.getElementById("inputcurrency").value;
	    country = document.getElementById("inputcountry").value;
		language = document.getElementById("inputlanguage").value;
		subject = document.getElementsByClassName("span2 search-query")[0].value;
        if(currency == "EURO") currency ="EUR";
		else { if(currency == "DOLLAR") currency ="USD";		       
			   else currency = "";
			 }
		if(country == "FRANCE") country ="FR";
		else{ if(country == "USA") country ="US";
		      else country = "";
			}
		if(language == "FRENCH") language ="fr";
		else{ if(language == "ENGLISH") language ="en";
		      else language = "";
			}		
        $.ajax({
	    type: "GET",
		url: "https://www.googleapis.com/shopping/search/v1/public/products?key=AIzaSyDnJ8FcO1c0l_fmnmYw2mEB4nLnOFk2d5U&country="+country+"&language="+language+"&currency="+currency+"&q="+subject+"",
		dataType: "json",
		success: function(msg){
            var donnees = msg['items'];
			var nbRes = document.createElement("h2");
			nbRes.innerHTML="<h3 style='color:red'>"+msg.totalItems+" product(s) found </h3><br></div>";
			var data_area = document.getElementById("results");
			data_area.appendChild(nbRes);			
			for (var i=0; i<donnees.length; i++) {    
                nouveauDiv = document.createElement("div");
				nouveauDiv.innerHTML = "<div class='well span11' style='text-align: center;'>"
				+"<div class='media' style='color:orange'>"
			    +"<a class='pull-left' href="+donnees[i].product.link+">"
				+"<img class='media-object' src="+donnees[i].product.images[0].link+" data-src='holder.js/64x64'>"
				+"</a>"
				+"<div class='media-body'>"
                +"<a href="+donnees[i].product.link+"><h4 class='media-heading' style='color:orange'>"+donnees[i].product.title+"<br>Price:"+donnees[i].product.inventories[0].price+donnees[i].product.inventories[0].currency+"(without shipping)</h4></a>"
                +"<div class='media' style='color:black'>"
				+"<h5>Description :</h5><br>"
				+"<h6>Availability : "+donnees[i].product.inventories[0].availability+"</h6><br>"
				+"<h6>Brand : "+donnees[i].product.brand+"</h6><br>"
				+"<p>"+donnees[i].product.description+"</p>"
                +"</div></div></div></div><br><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr><tr>";
                data_area.appendChild(nouveauDiv);				
			}           			
		}
		});
    }
	
//donnees[i].product.author.name;
//donnees[i].product.description;
//donnees[i].product.brand;			  
//donnees[i].product.inventories[0].price;
//donnees[i].product.inventories[0].availability;
//donnees[i].product.inventories[0].currency;
//donnees[i].product.inventories[0].shipping;
//donnees[i].product.images[0].link;

		


