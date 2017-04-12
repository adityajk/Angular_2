
import {User} from "./app.model";
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AppService {
    usersData: User[];
    restUrl:string = "http://localhost:2403/wsusers";
    myHeaders = new Headers({"Content-Type":"application/json"});
    options = new RequestOptions({headers: this.myHeaders});
    constructor(private ht:Http) {
    }

    getAllUsers() {
        return this.ht.get(this.restUrl);
    }

    addNewuser(newData:User) {
        return this.ht.post(this.restUrl, newData, this.options);
    }

    deleteUser(id:string) {
        return this.ht.delete(this.restUrl +"/" + id);
    }

    updateUser(newU: User) {
        return this.ht.put(this.restUrl , newU, this.options );
    }
}
