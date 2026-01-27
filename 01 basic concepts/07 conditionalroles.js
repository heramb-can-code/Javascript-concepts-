var user="testprep"

switch (user) {
    case "admin":
        console.log("You get full access");
        
        break;
        case "subadmin":
        console.log("You get only access to delete or modify courses");
        
        break;
        case "testprep":
        console.log("You get access to modify all the tests");
        
        break;
        case "user":
        console.log("You get access to consume content");
        
        break;

    default:
        break;
}