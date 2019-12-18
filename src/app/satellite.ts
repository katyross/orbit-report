export class Satellite {
    
name;
orbitType;
type;
operational;
launchDate;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
    
    }
    shouldShowWarning(): boolean{
        if (this.type.toLowerCase() == "space debris"){
            return true;
        } else {
            return false;
        }
    }
}
