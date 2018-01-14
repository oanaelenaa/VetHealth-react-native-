export class Animal {
    constructor(name,breed, id, sex, dateofbirth) {
        this.name = name;
        this.breed = breed;
        this.id = id;
        this.sex = sex;
        this.dateofbirth = dateofbirth;
    }

    getName() {
        return this.name;
    }

    getBreed() {
        return this.breed;
    }

    getId() {
        return this.id;
    }

    getSex() {
        return this.sex;
    }

    getDateOfBirth() {
        return this.dateofbirth;
    }

    setName(name) {
        this.name = name;
    }

    setBreed(content) {
        this.breed = content;
    }

    setId(id) {
        this.id = id;
    }

    setDateOfBirth(email) {
        this.dateofbirth = email;
    }

    setSex(approved) {
        this.sex = approved;
    }
}