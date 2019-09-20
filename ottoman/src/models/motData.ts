import { MotDataComments } from './motDataComments';

export class MotData {

    public completedDate: string;
    public testResult: string = 'PASSED';
    public expiryDate: string;
    public odometerValue: string;
    public odometerUnit: string;
    public odometerResultType: string;
    public motTestNumber: string;
    public rfrAndComments: MotDataComments[];

}