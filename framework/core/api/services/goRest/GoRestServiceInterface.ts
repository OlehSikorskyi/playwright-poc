import {Users} from "./types/Users";
import {PromiseResponse} from "../../BaseRestService";

export declare class GoRestServiceInterface {

    getUsers(): PromiseResponse<Users>;
}