var URL,country,subject,donnees,data,page;

function getMoreProducts(){
		$.ajax({
	    type: "GET",
		url: URL,
		dataType: "json",
		success: function(msg){
			URL = msg.nextLink+"&key=AIzaSyDnJ8FcO1c0l_fmnmYw2mEB4nLnOFk2d5U";
			page=page+1;
			pos=page*25;
            var donnees = msg['items'];
			var data_area = document.getElementById("results");
			for (var i=0; i<donnees.length; i++) {
				pos=pos+i;
                nouveauDiv = document.createElement("div");
				nouveauDiv.innerHTML = "<div class='span12' style='text-align: center;'>"
				+"<div class='accordion' id='accordion2'>"
				+"<div class='accordion-group'>"
				+"<div class='accordion-heading' style='background: white;'>"
				+"<a class='accordion-toggle' data-toggle='collapse'data-parent='#accordion2' href='#collapse"+pos+"'>"
				+"<h4 style='color:orange'>"+donnees[i].product.title+"<br><br><h4 style='color:grey'>Price:  "+donnees[i].product.inventories[0].price+" "+donnees[i].product.inventories[0].currency+" (without shipping)</h4></h4>"
				+"</a></div>"
				+"<div id='collapse"+pos+"' class='accordion-body collapse'>"
				+"<div class='accordion-inner'>"
				+"<div class='media' style='color:orange'>"
			    +"<a class='pull-left' href="+donnees[i].product.link+">"
				+"<img class='img-polaroid' width='200' height='100' src="+donnees[i].product.images[0].link+" data-src='holder.js/64x64'>"
				+"</a>"
				+"<div class='media-body'>"
                +"<a href="+donnees[i].product.link+"><h4 class='media-heading' style='color:orange'>View product in original website</h4></a>"
                +"<div class='media' style='color:white'>"
				+"<h5>Description :</h5>"
				+"<h6>Availability : "+donnees[i].product.inventories[0].availability+"</h6>"
				+"<h6>Brand : "+donnees[i].product.brand+"</h6><br>"
				+"<p>"+donnees[i].product.description+"</p>"
				+"<fb:like url='"+donnees[i].product.link+"' width='350'></fb:like>"
                +"</div></div></div>"
				+"</div></div></div></div></div><br><br>"
                data_area.appendChild(nouveauDiv);				
			}
			}
		});
        }
		
function findProducts(){	
		
		URL="";
	    country = document.getElementById("inputcountry").value;
		subject = document.getElementsByClassName("span2 search-query")[0].value;
		if(country == "FRANCE") country ="FR";
		if(country == "USA") country ="US";
		if(country == "CHINA") country ="CN";
		if(country == "NETHERLAND") country ="NL";
		if(country == "CANADA") country ="CA";
        if(country == "GERMANY") country = "DE";	
		if(country == "SPAIN") country ="ES";
		if(country == "UNITED KINGDOM") country ="GB";
		URL= "https://www.googleapis.com/shopping/search/v1/public/products?key=AIzaSyDnJ8FcO1c0l_fmnmYw2mEB4nLnOFk2d5U&country="+country+"&q="+subject;      
   
		$.ajax({
	    type: "GET",
		url: URL,
		dataType: "json",
		success: function(msg){
			page=0;	
            var donnees = msg['items'];
			var nbRes = document.createElement("h2");
			nbRes.innerHTML="<h3 style='color:red'>"+msg.totalItems+" product(s) found </h3><br></div>";
			var data_area = document.getElementById("results");
			data_area.appendChild(nbRes);
			var div = document.getElementById("content");
			div.parentNode.removeChild(div);
			for (var i=0; i<donnees.length; i++) {    
                nouveauDiv = document.createElement("div");
				nouveauDiv.innerHTML = "<div class='span12' style='text-align: center;'>"
				+"<div class='accordion' id='accordion2'>"
				+"<div class='accordion-group'>"
				+"<div class='accordion-heading' style='background: white;'>"
				+"<a class='accordion-toggle' data-toggle='collapse'data-parent='#accordion2' href='#collapse"+i+"'>"
				+"<h4 style='color:orange'>"+donnees[i].product.title+"<br><br><h4 style='color:grey'>Price:  "+donnees[i].product.inventories[0].price+" "+donnees[i].product.inventories[0].currency+" (without shipping)</h4></h4>"
				+"</a></div>"
				+"<div id='collapse"+i+"' class='accordion-body collapse'>"
				+"<div class='accordion-inner'>"
				+"<div class='media' style='color:orange'>"
			    +"<a class='pull-left' href="+donnees[i].product.link+">"
				+"<img class='img-polaroid' width='200' height='100' src="+donnees[i].product.images[0].link+" data-src='holder.js/64x64'>"
				+"</a>"
				+"<div class='media-body'>"
                +"<a href="+donnees[i].product.link+"><h4 class='media-heading' style='color:orange'>View product in original website</h4></a>"
                +"<div class='media' style='color:white'>"
				+"<h5>Description :</h5>"
				+"<h6>Availability : "+donnees[i].product.inventories[0].availability+"</h6>"
				+"<h6>Brand : "+donnees[i].product.brand+"</h6><br>"
				+"<p>"+donnees[i].product.description+"</p>"
				+"<fb:like url='"+donnees[i].product.link+"' width='350'></fb:like>"
                +"</div></div></div>"
				+"</div></div></div></div></div>"
                data_area.appendChild(nouveauDiv);				
			}
			if( msg.totalItems > 25)
			{   page=page+1;
				URL = msg.nextLink+"&key=AIzaSyDnJ8FcO1c0l_fmnmYw2mEB4nLnOFk2d5U";
				var more_products = document.getElementById("moreresults");
				newbutton = document.createElement("div");
				newbutton.innerHTML ="<button class='btn-inverse btn-large btn-block btn-primary' type='button' onclick = 'getMoreProducts(URL)'>View more products</button><br><br><br><br><br>"
				more_products.appendChild(newbutton);	
			}
		}
		});
    }

