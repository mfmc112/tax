import { User } from './user';
import { Client } from './client';
import { ClientInformation } from './client-information';

export class Application {
    year: number;
    status: string;
    estimate: number;
    currentAgi: number;
    preparer: User;
    client: Client;
    clientInformation: ClientInformation;
    lastUpdated: Date;
}
