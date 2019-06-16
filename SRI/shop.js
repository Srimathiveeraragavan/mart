
var i=0;

function save(){
var name=document.getElementById("a").value;
localStorage.setItem("keyname",name);
var email=document.getElementById("c").value;
localStorage.setItem("keyemail",email);
var address=document.getElementById("b").value;
localStorage.setItem("keyaddress",address);
}

function show(){
var a=localStorage.getItem("keyname");
var b=localStorage.getItem("keyaddress");
var c=localStorage.getItem("keyemail");
alert("welcome to shopping mart "+a);
}

function bill(str){


var rs=Number(str);
var b=sessionStorage.getItem("bill");
b=+b+rs;
alert("Sucessfully Added to cart and your bill amount is "+b);
sessionStorage.setItem("bill",b);
i++;

}

var count=0;   


	 function cart(no)
	 {
	 count++;
	 var num=parseInt(no);/*<!--start from0-->*/
	 var n=document.getElementsByTagName("h4");
	 var nnn=document.getElementsByTagName("h3");
	 var name=nnn[num].getAttribute("book");
	 console.log(name);
	sessionStorage.setItem("keybook",name);
	 
	 
	 var price=n[num].getAttribute("price");
	 console.log(price);
	 bill(price);	
	 sessionStorage.setItem("keyprice",price);	
	 
	 var oldHTML = document.getElementById('tabcart').innerHTML;
	var mycode=oldHTML;
					mycode+='<tr>';
					mycode+='<td>';
					mycode+=name;
					
					mycode+='</td>';
					mycode+='<td>';
					mycode+=price;
					
					mycode+='</td>';
					mycode+='</tr>';
					
					document.getElementById("tabcart").innerHTML=mycode;
					var sess=mycode;
					sessionStorage.setItem("keytable",sess);
	 }
/*	var oldHTML = document.getElementById('tabcart').innerHTML;
	var mycode=oldHTML;
					
					mycode+='<tr>';
					mycode+='<th scope="row">';
					mycode+=count;
					
					mycode+='</th>';
					mycode+='<td>';
					mycode+=name;
					
					mycode+='</td>';
					mycode+='<td>';
					mycode+=price;
					
					mycode+='</td>';
					mycode+='</tr>';
					
					document.getElementById("tabcart").innerHTML=mycode;
					tot+=(+price);
					document.getElementById("total").innerHTML=tot;
					document.getElementById("fig").innerHTML=count;
					carthide(count);
	}
	* 
	* 
	* <div class="container" id="tab">
   <div class="jumbotron">
   <div>
	<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Item</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody id="tabcart">
  </tbody>
  <tbody>
  <tr>
      <th scope="row"></th>
      <td style="text-align:right;font-size:20px;">          <b> Total &nbsp<b class="glyphicon glyphicon-euro">  </td>
      <td id="total" style="font-size:20px;"> 0 </td>
    </tr>
  </tbody>
  
</table>
</div>
   </div>


</div>
* 
* var oldHTML = document.getElementById('tabcart').innerHTML;
	var mycode=oldHTML;
					
					mycode+='<tr>';
					mycode+='<td>';
					mycode+=name;
					
					mycode+='</td>';
					mycode+='<td>';
					mycode+=price;
					
					mycode+='</td>';
					mycode+='</tr>';
					
					document.getElementById("tabcart").innerHTML=mycode;
					
* 
function carthide() 
{
	if (count >= 1) {
		 document.getElementById("cart1").style.display = "block";
		 } 
	else {
		 document.getElementById("cart1").style.display = "none";
		 }
		 * 
		 * 
		 * 
		 * 
		 * function cart(no)
	 {
	 count++;
	 var num=parseInt(no);/*<!--start from0-->*/
	 
/*	 var n=document.getElementsByTagName("h4");
	  var nn=document.getElementsByTagName("h3");
	 var name=nn[num].getAttributeNames("book");
	 console.log(name);
	
	 sessionStorage.setItem("keybook",nn[num].getAttributeNames("book"));
	 
	 var price=n[num].getAttribute("price");
	 console.log(price);
	 bill(price);	
	 sessionStorage.setItem("keyprice",price);	
	 }
}*/
		    
