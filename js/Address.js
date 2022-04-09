//Importing the neccessary module
const read = require('readline-sync')

// //Created contact class(UC1)
// class Contact {
//     //Declaring the properties(UC1)
//     firstName;
//     lastName;
//     address;
//     city;
//     state;
//     zipCode;
//     phoneNumber;
//     emailId;
//     zender;
//     profession;

//     //Initializing the parameterized constructor of class using constructor keyword(UC1)
//     constructor(...parameters) {
//         this.firstName = parameters[0];
//         this.lastName = parameters[1];
//         this.address = parameters[2];
//         this.city = parameters[3];
//         this.state = parameters[4];
//         this.zipCode = parameters[5];
//         this.phoneNumber = parameters[6];
//         this.emailId = parameters[7];
//         this.zender = parameters[8];
//         this.profession = parameters[9];
//     }

//     //Method to return values in string format
//     toString() {
//         return `First Name: ${this.firstName}\n Last Name: ${this.lastName}\n Address: ${this.address}\n City: ${this.city}\n State: ${this.state}\n ZipCode: ${this.zipCode}\n Phone Number: ${this.phoneNumber}\n Email-Id: ${this.emailId}\n zender: ${this.zender}\n profession: ${this.profession}\n`;
//     }
// }

// //Displaying the welcome message
// console.log("Welcome To The AddressBook Program Using Js")

// //Function to return object of added contacts(UC1)
// function returnAddedContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, zender , profession) {
//     let contact
//     try {
//         //Object for class
//         contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, zender, profession);
//     } catch (e) {
//         console.error(e)
//     }
//     return contact;
// }

// //Function to get the details of the contact from the user
// function getContactDetails() {
//         let firstName = read.question('Enter Your FirstName : ');
//         let lastName = read.question('Enter Your LastName : ');
//         let address = read.question('Enter Your Address : ');
//         let city = read.question('Enter Your City Name: ');
//         let state = read.question('Enter Your State Name : ');
//         let zipCode = parseInt(read.question('Enter Your Zip Code : '));
//         let phoneNumber = parseInt(read.question('Enter Your Phone Number : '));
//         let emailId = read.question('Enter Your Email Id : ');
//         let zender = read.question('Enter Your Zender : ');
//         let profession = read.question('Enter Your Profession : ');
//         let contactDetails = returnAddedContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, zender , profession);
//         console.log("\nDetails Of Contacts");
//         console.log(contactDetails.toString());

// }

// //Calling the function(UC1)
// //getContactDetails();

// //uc2 validating the input of user using regex pattern
// function getContactDetails() {
//     //Regex patterns for validating contact details(UC2)
//     let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
//     let addressPattern = new RegExp('^[A-Za-z]{4,}$');
//     let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
//     let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
//     let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
//     let zenderPattern = new RegExp('^[A-Za-z]{4,}$');
//     //Validating first name(UC2)
//     let firstName = read.question('Enter Your FirstName Start With Capital : ');
//     if (!namePattern.test(firstName))
//         throw 'Invalid Input';
//     //Validating last name(UC2)
//     let lastName = read.question('Enter Your LastName Start With Capital : ');
//     if (!namePattern.test(lastName))
//         throw 'Invalid Input';
//     //Validating address(UC2)
//     let address = read.question('Enter Your Address : ');
//     if (!addressPattern.test(address))
//         throw 'Invalid Input';
//     //Validating city name(UC2)
//     let city = read.question('Enter Your City Name: ');
//     if (!addressPattern.test(city))
//         throw 'Invalid Input';
//     //Validating states name(UC2)
//     let state = read.question('Enter Your State Name : ');
//     if (!addressPattern.test(state))
//         throw 'Invalid Input';
//     //Validating zip code(UC2)
//     let zipCode = read.question('Enter Your Zip Code : ');
//     if (!zipCodePattern.test(zipCode))
//         throw 'Invalid Input';
//     //Validating phone number(UC2)
//     let phoneNumber = read.question('Enter Your Phone Number : ');
//     if (!phoneNumPattern.test(phoneNumber))
//         throw 'Invalid Input';
//     //Validating email id(UC2)
//     let emailId = read.question('Enter Your Email Id : ');
//     if (!emailIdPattern.test(emailId))
//         throw 'Invalid Input';
//     //Validating gender(UC2)
//     let zender = read.question('Enter Your Zender : ');
//     if(!zenderPattern.test(zender))
//     throw 'Invalid Input';
//     let profession = read.question('Enter Your Profession : ');
//     if(!zenderPattern.test(profession))
//     throw 'Invalid Input';
//     let contactDetails = returnAddedContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId, zender, profession);
//     console.log("\nDetails Of Contacts");
//     console.log(contactDetails.toString());
// }
// //calling uc2
// getContactDetails();


//Created contact class(UC3)
class Contact {
    //Declaring the properties(UC1)
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        //Regex patterns for validating contact details(UC2&&UC3)
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z0-9]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})$');
        if (!namePattern.test(parameters[0]) && !namePattern.test(parameters[1]))
            throw 'First or last name should have minimum 3 characters';
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        if (!addressPattern.test(parameters[2]) && !addressPattern.test(parameters[3]) && !addressPattern.test(parameters[4]))
            throw 'It Should have minimum 4 characters';
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        if (!zipCodePattern.test(parameters[5]))
            throw 'Zipcode is not valid';
        this.zipCode = parameters[5];
        if (!phoneNumPattern.test(parameters[6]))
            throw 'Phone number is not valid';
        this.phoneNumber = parameters[6];
        if (!emailIdPattern.test(parameters[7]))
            throw 'Email id is not valid';
        this.emailId = parameters[7];
    }

    //Method to return values in string format
    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\nAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\nZipCode: ${this.zipCode} \tPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n`;
    }
}

//Initializing an addressbook contact array(UC3)
var addressBookContactArr = new Array();

//Displaying the welcome message
console.log("Welcome To The AddressBook Program Using Js")

//Function to return object of added contacts(UC1)
function addContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    addressBookContactArr.push(contact);
}

//Fucntion to add default contact into an array(C3)
function addDefaultContactDetails() {
    try {
        addContact("Sadam", "Hussain", "Raxaul", "sagauli", "Bihar", "456123", "91 9517534561", "saj123@gmail.com");
        addContact("Royal", "Roy", "Nagawara-45", "Banglore", "Karnataka", "789456", "91 7412589631", "roy456@gmail.com");

        if (addressBookContactArr.length != 0)
            console.log("Added The Default Contacts Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to get the details of the contact from the user(UC1 && UC2)
function getContactDetails() {
    try {
        let firstName = read.question('Enter Your FirstName Start With Capital : ');
        let lastName = read.question('Enter Your LastName Start With Capital : ');
        let address = read.question('Enter Your Address : ');
        let city = read.question('Enter Your City Name: ');
        let state = read.question('Enter Your State Name : ');
        let zipCode = read.question('Enter Your Zip Code : ');
        let phoneNumber = read.question('Enter Your Phone Number : ');
        let emailId = read.question('Enter Your Email Id : ');
        addContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("Added The Contact Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//Function to display contacts(UC3)
function displayContact() {
    try {
        console.log("\n*****Details Of AddressBook Contacts********\n");
        addressBookContactArr.forEach(contact => console.log(contact.toString()));
    } catch (e) {
        console.error(e);
    }
}

//Function to view edit contacts based on the given name(UC4)
function viewAndEditContact() {
    try {
        let name = read.question('Enter The Name Of Contact View And Modify : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.firstName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address \n9: Go Back")
                    let choice = parseInt(read.question("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newFirstName = read.question("Enter The New First Name : ");
                            contact.firstName = newFirstName;
                            break;
                        case 2:
                            let newLastName = read.question("Enter The New First Name : ");
                            contact.lastName = newLastName;
                            break;
                        case 3:
                            let newAddress = read.question("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = read.question("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = read.question("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newZipCode = read.question("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 7:
                            let newPhoneNum = read.question("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = read.question("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                        case 9:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}

//Function to delete contact based on name(UC5)
function deleteContact() {
    try {
        let name = read.question('Enter The Name Of The Contact To View And Modify Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.firstName == name);;
        //using splice remove the element
        if (index != -1)
            addressBookContactArr.splice(index, 1);
    } catch (e) {
        console.error(e);
    }
}

//Function to seach person in a particular city or state(UC6)
function seachPerson(city, state) {
    let cityOrState = read.question("Enter A City Or State Name To Find Person : ");
    let contact = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
    console.log(contact.join("\n"));
}

//Function to perform addressbook operations(UC3-UC6)
function addressBookOperations() {
    try {
        while (true) {
            console.log("1: Add New Contact \n2: Add Default Contacts \n3: Display \n4: Edit And View Contact \n5: Delete Contact \n6: Search Person \n7: Exit");
            switch (parseInt(read.question('Enter the choice : '))) {
                case 1:
                    getContactDetails();
                    break;
                case 2:
                    addDefaultContactDetails();
                    break;
                case 3:
                    displayContact();
                    break;
                case 4:
                    viewAndEditContact();
                    break;
                case 5:
                    deleteContact();
                    break;
                case 6:
                    seachPerson();
                    break;
                case 7:
                    console.log("Exited");
                    process.exit(1)
                    break;
                default:
                    console.log("Wrong Choice");
                    //break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}
//Calling the addressbook operation functions(UC3-UC5)
addressBookOperations()