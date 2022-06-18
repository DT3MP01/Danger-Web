import { DocumentReference } from "firebase/firestore";

export class game {
    roomName!: string;
    playerName!: string;
    extinguishers!: number;
    image!: string;
    meters!: number;
    doors!: number;
    windows!: number;
    reference!:string;

    constructor(roomName:string,playerName: string, extinguishers: number, image: string, meters: number, doors: number, windows: number,reference:string) {
        this.roomName = roomName;
        this.playerName = playerName;
        this.extinguishers = extinguishers;
        this.image = image;
        this.meters = meters;
        this.doors = doors;
        this.windows = windows;
        this.reference = reference;
    }

}