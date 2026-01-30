const user = ""
if (user) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

const useremail = []
if (useremail.length===0) {
    console.log("array is empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length===0) {
    console.log("object is empty");
}