export class game {
    roomName!: string;
    playerName!: string;
    extinguishers!: number;
    image!: string;
    meters!: number;
    doors!: number;
    windows!: number;

    constructor(roomName:string,playerName: string, extinguishers: number, image: string, meters: number, doors: number, windows: number) {
        this.roomName = roomName;
        this.playerName = playerName;
        this.extinguishers = extinguishers;
        this.image = image;
        this.meters = meters;
        this.doors = doors;
        this.windows = windows;
    }

}