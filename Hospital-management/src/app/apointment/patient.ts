import { Time } from "@angular/common";
import { Doctor } from "./doctor";

export class Patient {
    "id":number;
    "name":string;
    "city":string;
    "state":string;
    "date":string;
    "time":string;
    "status":string;
    "symptom":string;
    "precautions":string;
    "specialist":Doctor;
}
