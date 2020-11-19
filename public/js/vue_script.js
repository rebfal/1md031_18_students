
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
  console.log(customerArray)
  return customerArray;
    
}



// INFORMATION OM ORDER

function getBurgerInformation() {
  var burgerArray = document.getElementsByName("checkbox");
  var selectedBurgers =[];
  for (var i, i=0; i < burgerArray.length; i++) {
    if (burgerArray[i].checked) {
      selectedBurgers.push(burgerArray[i].value);
    }
  }
  console.log(selectedBurgers)
  return selectedBurgers;
}

'use strict';
var socket = io();

var vm = new Vue({
el: "#main",
data: {
items: menu,
customerArray: [],
checkedBurgers: [], 
//click, //= false,
orders: {},

},


// SKAPA SOCKET
created: function () {
  socket.on('initialize', function (data) {
    this.orders = data.orders;
  }.bind(this));

  socket.on('currentQueue', function (data) {
    this.orders = data.orders;
  }.bind(this));
},

methods:{
  
  buttonClicked: function () {
    //this.click = true;
    this.customerArray = getCustomerInformation();
    this.checkedBurger = getBurgerInformation();
    this.addOrder();
  },

  
  getNext: function () {
    var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
      return Math.max(last, next);
    }, 0);
    return lastOrder + 1;
  },


  
  addOrder: function (event) {
    var offset = {x: event.currentTarget.getBoundingClientRect().left,
                  y: event.currentTarget.getBoundingClientRect().top};
    socket.emit("addOrder", { orderId: this.getNext(),
                              details: { x: event.clientX - 10 - offset.x,
                                         y: event.clientY - 10 - offset.y },
                              orderItems: ["Beans", "Curry"]
                            });
  },

  displayOrder: function(event) {
    console.log("Detta är displayOrder")
    console.log(event)


  }

  

  

}

})







      

    

    
