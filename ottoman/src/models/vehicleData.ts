export class VehicleData {

    // All selected vehicle details from the DVLA API
    public taxDate: Date;
    public motDate: Date;

    public make: string;

    public manufatureYear: number;
    public registrationData: string;

    public engineSize: number;
    public fuelType: string;

    private status: string; // This for example could be 'Tax not due'

    public colour: string;

    // Data that the user will  need to enter
    public model: string;

    public reg: string;
    

    constructor() {
        
    }

}