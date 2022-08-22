class StationManager {
    logMessage(train, message){
        const time = new Date();
        const trainNum = train.getNumber();

        console.log(`${time} Info about train ${trainNum}: sends message: ${message}`);
    }
}

class Train{
    constructor(number, station){
        this.number = number;
        this.station = station;
    }

    getNumber(){
        return this.number
    }

    send(message){
        this.station.logMessage(this, message);
    }
}

const station = new StationManager();

const tejas = new Train(121212, station);
const rajdhani = new Train(121213, station);

tejas.send('Hello I am running late');
rajdhani.send('Hello I am on time please give me a platform number');