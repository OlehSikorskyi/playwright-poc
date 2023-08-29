import {Service} from "./Service";
import {User} from "./User";

export interface Configuration {
    baseUrl: string;
    services: Service[];
    standardUser: User;
    lockedOutUser: User;
}
