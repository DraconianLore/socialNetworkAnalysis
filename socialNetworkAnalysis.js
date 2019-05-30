var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f01';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f02';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f03';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f04';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f05';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f06';
      if (ageMin || ageMax) {
        console.log('oops');
      } else {
        this.followers = 0;
        for (let people in data) {
          if (people != person) {
            if(data[people].follows.includes(person)) {
              this.followers += 1;
            }
          }
        }
          return this.followers;
      }
    }
  }

};




function followsTheMost() {
  let personWithTheMost = data.f01;
  for (let people in data) {
    if (personWithTheMost.follows.length < data[people].follows.length) {
      personWithTheMost = data[people];
    }
  }
  console.log(personWithTheMost.name + ' follows the most people');
}

followsTheMost();


getEveryonesFollowers();
function getEveryonesFollowers() {
  for (let people in data) {
    data[people].getFollowers();
  }
  // console.log(data);

}