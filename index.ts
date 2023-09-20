import {userDetails} from "./functions";
import {User} from "./types";


export const printUserDetails = (user: User) => {
    console.log(userDetails(user))
};


