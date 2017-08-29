import { User, Client, ClientInformation, W2Form } from './';

export class Application {
    year: number;
    status: string;
    estimate: number;
    currentAgi: number;
    preparer: User;
    client: Client;
    clientInformation: ClientInformation;
    w2Forms: W2Form[];
    lastUpdated: Date;
}
