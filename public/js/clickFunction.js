var myButton = document.getElementbyId('myButtonID');
myButton.addEventListener("click", function(){
    console.log('Du klickade')
});

// In JavaScript you can either trigger an event directly on an object
//myButton.onclick = clickButton();

// You can pass a defined function as above (no parentheses), or provide an anonymous function
//myButton.onclick = function clickButton() {
    //console.log('Du klickade :)))))')
//}




//var burger = document.getElementbyId('burgerOK');

// In JavaScript you can either trigger an event directly on an object
//burger.onclick = clickBurger();

// You can pass a defined function as above (no parentheses), or provide an anonymous function
//burger.onclick = function clickBurger() {
    //console.log("Du beställde :)))))")
//}



// JS_SCRIPT

export function MenuItem(name, imgURL, kCal, gluten, lactose, description) {
    this.name = name;
    this.img = imgURL;
    console.log(this.img)

    this.kCal = kCal;
    console.log(this.kCal)

    this.gluten = gluten;
    this.lactose = lactose;
    this.description = description;
    console.log(this.description) 

}

// BUTTON

function ButtonClick() {
    var let = [];
    return GetText(let);
}



// CONTACT
function GetText(let) {
    
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var strnumber = document.getElementById("house").value;
    var payment = document.getElementById("payment").value;
    document.getElementById("payment").innerHTML = payment;
    var radios = document.getElementById("gender");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked)
            var gender = radio[i].value;
    }

    let.push(name, mail, payment, gender);

    for (i = 0; i < webkitConvertPointFromNodeToPage.length; i++) {
        var CB = document.getElementById(menu[i].name)
        if (CB.checked == true) {
            console.log(menu[i].name);
            let.push.log(menu[i].name);
        }
    }

    return let;



}





// VUE


var vm = new Vue({
    el: "#main",
    data: {
      items: menu,
      let: [],
    },
    
    methods:{
      buttonClicked: function() {
          this.let = buttonClick();
          console.log(this.let)
          
      },
      addOrder: function(){
        console.log(displayOrder())
      }, 

      markDone: function() {
        this.details = getDetails();
        buttonClicked = true;
        
    }
    
    }
    
    })


