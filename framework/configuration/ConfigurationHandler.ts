import config from 'config';
import {Configuration} from "./types/Configuration";
import {Services} from "./Services";
import {Service} from "./types/Service";
import {User} from "./types/User";
import {Users} from "./Users";

export class ConfigurationHandler {
    private static instance: ConfigurationHandler = new ConfigurationHandler();

    private baseUrl: string;
    private services: Service[];
    private users: User[];

    constructor() {
        if (ConfigurationHandler.instance) {
            return ConfigurationHandler.instance;
        }
        let configuration: Configuration = config;
        this.baseUrl = configuration.baseUrl ?? '';
        this.services = configuration.services;
        this.users = [configuration.standardUser, configuration.lockedOutUser];

        ConfigurationHandler.instance = this;
    }

    getService(name: Services) {
        return this.services.find(service => service.name == name);
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    getUser(type: Users) {
        return this.users.find(user => user.type == type);
    }
}