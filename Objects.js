// we can use functions and other data structurs like dictionaries, methods and so on
// an object is a dictionary technically

var dic = new Object();
// you can declare it as {}

var myDict = {"name":"Liberty",
              "LastName":"Mupotsa"};

// console.log(myDict["name"]);

// iteration in a dictionary

// for (var member in myDict){
//     console.log(member);
// }

// this is how you iterate through a dictionary.
for (var  i in myDict){
    if (myDict.hasOwnProperty(i)){
        console.log(myDict[i]);
    }
}




