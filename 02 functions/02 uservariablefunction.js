function getUserRole(name,role) {
    switch (role) {
        case "admin":
            return `${name} is an admin with full access`;
            
            
             case "subadmin":
            return `${name} is an subadmin with access to modify and delete courses`;
            
            
             case "testprep":
            return `${name} is an testpreper with access to create and delete tests`;

            case "user":
            return `${name} is a user with access to consume content`;
            
            
    
        default:
            return `${name} is a trial user`;
            
    }
}

console.log(getUserRole("heramb","admin "));