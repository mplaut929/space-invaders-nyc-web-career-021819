class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    if (crew.length > 0){
      this.docked = false
    }else{
      this.docked = true
    }
    this.assignCrew()
  }

  assignCrew(){
    this.crew.forEach(crewMember => (crewMember.currentShip = this))
  }





}
