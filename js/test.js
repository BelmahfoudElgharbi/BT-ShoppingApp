$.ajax({
	    type: "GET",
	    dataType: "json",
		url: "https://www.googleapis.com/shopping/search/v1/public/products?key=AIzaSyBhTUudJSb6He_d12ZIrQ_cvYmEYeJWkW4&country=FR&language=fr&currency=EUR&q=tv",
		success: function(msg){
            var donnees = msg['items'];
            console.log(donnees);
			var nbRes = msg.totalItems+"  product(s) found";
			var aff = "Results :";
			for (var i=0; i<donnees.length; i++) {
			    var data_area = document.getElementById("tab-1");
                nouveauDiv = document.createElement("div");
				nouveauDiv.innerHTML = "<table class='table table-striped'>"
			     aff = aff +"---"+i+"---"+ donnees[i].product.title+"  ";
			  //donnees[i].product.author.name;
			  //donnees[i].product.description;
			  //donnees[i].product.brand;			  
			  //donnees[i].product.inventories[0].price;
			  //donnees[i].product.inventories[0].availability;
			  //donnees[i].product.inventories[0].currency;
			  //donnees[i].product.inventories[0].shipping;
			  //donnees[i].product.inventories[0].images[0].link;	
		     		
			}
            alert(nbRes+" : "+"   "+aff);			
		}
		});
		
		
		
    //<div class="media">
    //<a class="pull-left" href="#">
    //<img class="media-object" data-src="holder.js/64x64">
    //</a>
    //<div class="media-body">
   // <h4 class="media-heading">Media heading</h4>    
    //<!-- Nested media object -->
    //<div class="media">
    //...
    //</div>
    //</div>
    //</div>
