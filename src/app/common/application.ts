import { User, Client, ClientInformation, W2Form, Dependent } from './';

export class Application {
    _id: any;
    year: number;
    status: string;
    estimate: number;
    currentAgi: number;
    preparer: User;
    client: Client;
    clientInformation: ClientInformation;
    w2Forms: W2Form[];
    dependents: Dependent[];
    lastUpdated: Date;
}
