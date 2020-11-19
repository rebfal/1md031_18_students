
import { MenuItem } from './js_script.js'
import { menu } from './menu.js'


//var button = document.getElementById("orderButton");
//button.addEventListener("click", orderDone());

//function orderDone(){
    //console.log("Your order has been placed :)")

    //var name = document.getElementById('')
//}




// INFORMATION OM KUND

function getCustomerInformation () {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  //var streetname = document.getElementById("adress").value;
  //var houseNumber = document.getElementById("house").value;
  var payment = document.getElementById("payment").value;
  var gender = document.getElementsByName("gender");
    for (var i=0; i < gender.length; i++) {
      if(gender[i].checked) {
        gender=gender[i].value;
        break;
      }
    }
  var customerArray = [fullname, email, payment, gender];
  return curtomerArray;
    
}



// INFORMATION OM ORDER

function getBurgerInformation() {
  var burgerArray = document.getElementsByName("checkbox");
  var selectedBurgers =[];
  for (i=0; i < burgerArray.length; i++) {
    if (burgerArray[i].checked) {
      selectedBurgers.push(burgerArray[i].value);
    }
  }
  return selectedBurgers;
}




var vm = new Vue({
el: "#main",
data: {
items: menu,
customerArray: [],
checkedBurgers: [], 
//click = false,


},


methods:{
  
  buttonClicked: function () {
    this.click = true;
    this.customerArray = getCustomerInforamtion();
    this.checkedBurger = getBurgerInformation();
    this.addOrder();
  },

  
  addOrder: function(event){
    console.log("Detta är addOrder")
  },

  displayOrder: function(event) {
    console.log("Detta är displayOrder")
  }

  

  

}

})







      

    

    
