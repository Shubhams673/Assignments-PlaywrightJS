// Object ==> Object is a non-primitive data type that allows us to store multiple properties in the form of key-value pari.

// 1. Storing the data inside the object
console.log("***************Storing the data inside the object*****************");
interface personInfo{
    name: String;
    age : number;
    empId: number;
    visa?: boolean;
    salary?: number; // Optional property
    address: {
            city: string;
            state: string;    
            country: string;
            zipCode?: number; // Optional property
    }
}
let person: personInfo = {
    "name": "Subham Singh",
    "age": 25,
    "empId": 1234,
    "visa": true,
    "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India"
    }
}

// 2. Accessing the data from the object
console.log("***************Accessing the data from the object*****************");
console.log(person.name);
console.log(person["age"]);
console.log(person.address.city);
console.log(person["address"]["state"]);

// 3. Adding the new property to the existing object
console.log("***************Adding the new property to the existing object*****************");
person.salary = 200000;
person.address.zipCode = 700141;
console.log(person);

//4. Update an exisiting property of the object to optional property
console.log("***************Update an exisiting property of the object*****************");
person.age = 30;
person["name"] = "Subham Singh Rajput";
console.log(person);

// 5. Delete a property from the existing object from options peroperty
console.log("***************Delete a property from the existing object*****************");
delete person.visa; // delete person["visa"] as a property from the object
console.log(person);

// 6. Checking if a property exists in the object or not
console.log("***************Checking if a property exists in the object or not*****************");
console.log("visa" in person); // false
console.log("salary" in person); // true

// 7. Get all the keys from the object
console.log("***************Get all the keys from the object*****************");
console.log(Object.keys(person)); // ["name", "age", "empId", "address", "salary"]

// 8. Get all the values from the object
console.log("***************Get all the values from the object*****************");
console.log(Object.values(person)); // ["Subham Singh Rajput", 30, 1234, {city: "Bangalore", state: "Karnataka", country: "India", zipCode: 700141}, 200000]

//9. Get all the entries from the object
console.log("***************Get all the entries from the object*****************");
console.log(Object.entries(person)); // [["name", "Subham Singh Rajput"], ["age", 30], ["empId", 1234], ["address", {city: "Bangalore", state: "Karnataka", country: "India", zipCode: 700141}], ["salary", 200000]]

//10. Iterat all the keys from the object and get the values out of it.
console.log("***************Iterat all the keys from the object and get the values out of it*****************");
for(let key in person){
    console.log(`${key} : ${person[key as keyof personInfo]}`)
}

// 11. Verify the data type of the property within the object
console.log("***************Verify the data type of the property within the object*****************");
console.log(typeof person.name);
console.log(typeof(person.address));

// 12. Merging two objects together
console.log("***************Merging two objects together*****************")
interface companyInfo{
    companyName: string;
    location: string;
}
let company: companyInfo ={
    companyName: "CGI",
    location: "Bangalore"
}
let mergedObject = {...person, ...company};
console.log(mergedObject);
