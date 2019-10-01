const salon={
    name:"Game of Bones Pet Salon",
    phone:"555-555-5555",
    address:{
        street:"Winterfell Street",
        number:"7"
        
    },

    workingHours:{
        days:"Mon-Fri",
        open:"8:00 a.m.",
        close:"5:00 p.m."
    },

    pets:[],
    
}

const petCount=function(){
    alert("You have registered " + salon.pets.length + " pets at the Game of Bones Pet Salon");
}

let{name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.querySelector('.info').innerHTML=`<h1> Welcome to <br>the ${name} </h1><br><p>Contact us ${phone}, ${number} ${street} <br> Hours of operation: ${open} to ${close}</p>`;
document.querySelector('footer .info').innerHTML=`<p>Contact us ${phone}, ${number} ${street} <br> Hours of operation: ${open} to ${close}</p>`;
class Pet {
    constructor(breed, owner, contactPhone, petName, age, gender, service) {
        this.hunger=10;
        this.happiness=5;
        this.breed = breed;
        this.owner = owner;
        this.contactPhone = contactPhone;
        this.petName = petName;
        this.age = age;
        this.gender = gender;
        this.service = service;

        

    }

    status=function(){
        console.log("Happiness: " + this.happiness + "  " + "Hunger: " + this.hunger);
        
    }


    contact=function(){
        console.log("Owners Name: " + this.owner + "\n" + "Contact Phone: " + this.contactPhone);

    }

    feed=function(){
        this.hunger-=10;
        this.happiness+=12;
        console.log("Feeling ... ");
    }

    
}
var txtbreed = document.getElementById('breed');
var txtowner = document.getElementById('owner');
var txtcontactPhone = document.getElementById('contactPhone');
var txtpetName = document.getElementById('petName');
var txtage = document.getElementById('age');
var txtgender = document.getElementById('gender');
var txtservice = document.getElementById('service');



function appointment(){
    
    const thePet=new Pet(txtbreed.value, txtowner.value, txtcontactPhone.value, txtpetName.value, txtage.value, txtgender.value, txtservice.value);

    salon.pets.push(thePet);
    reset();
    alert('Thank you for registering your pet with the Game of Bones Pet Salon');
    displayTable(thePet);
}

function reset(){
    txtbreed.value="";
    txtowner.value="";
    txtcontactPhone.value="";
    txtpetName.value="";
    txtage.value="";
    txtgender.value="";
    txtservice.value="";

}

function displayTable(aPet){
    var tBody=document.getElementById('petTable');
    var row = `<tr>
    <td>${aPet.breed}</td>
    <td>${aPet.owner}</td>
    <td>${aPet.contactPhone}</td>
    <td>${aPet.petName}</td>
    <td>${aPet.age}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.service}</td>
    </tr>`;

    tBody.innerHTML+=row;

}

// function display(aPet){
//     var list = document.getElementById('petList');
//     var li = document.createElement('li');
//     li.innerText=`${aPet.breed} -- ${aPet.petName} -- ${aPet.age} -- ${aPet.service}`;
//     li.setAttribute('class', 'list-group-item');
//     list.appendChild(li);

// }



// for(let i=0;i<salon.pets.length; i++){
// document.getElementById('pet-info').innerHTML=`Pets currently staying at the Grr and Purr Pet Salon: ${salon.pets.length} <br>Pets: ${salon.pets[0].petName}, ${salon.pets[1].petName}, ${salon.pets[2].petName}`;
// petCount();
    // console.log(salon.pets[i].petName);
// }

// console.table(salon.pets);


// document.getElementById('pet-info').innerHTML=`<p>Pets currently staying at Grr and Purr Pet Salon: ${pet1.petName}, ${pet2.petName}, ${pet3.petName}`

// console.log(salon.pets[1],name);

// pet1.status();
// pet1.feed();
// pet1.status();
// pet1.contact();





//console.log(pets.length);


// console.table(salon.pets);



