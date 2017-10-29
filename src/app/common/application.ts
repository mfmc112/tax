import { User, Client, ClientInformation, W2Form, W2GForm, Dependent, Form1040 } from './';

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
    w2GForms: W2GForm[];
    dependents: Dependent[];
    form1040: Form1040;
    lastUpdated: Date;
}
