class DriverEntity {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      this._email = email;
    }
}
  
module.exports = DriverEntity;
  