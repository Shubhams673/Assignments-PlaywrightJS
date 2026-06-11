interface personInfo{
    name: String;
    age : number;
    empId: number;
    visa?: boolean;
    salary?: number; // Optional property
    currentAddress: {
            city: string;
            state: string;    
            country: string;
            zipCode?: number; // Optional property
    }
    previousAddress:{
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
    "currentAddress": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India"
    },
    "previousAddress": {
        "city": "Kolkata",
        "state": "WestBengal",
        "country": "India",
        "zipCode": 700141
    }
}

console.log(person);
for(let key in person){
    console.log("Key in person : " + key);
    console.log("Values of person - " + person[key as keyof personInfo]);
}

