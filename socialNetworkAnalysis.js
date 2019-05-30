var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
    getFollowers: function(ageMax, ageMin) {
      let person = 'f01';
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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
      let tempFollowers = 0;
      if (ageMin) {
        for (let people in data) {
          if (people != person) {
            if (data[people].follows.includes(person)) {
              if (data[people].age > ageMin) {
                tempFollowers++;
              }
            }
          }
        }
        return tempFollowers;
      } else if (ageMax) {
        console.log('not implimented yet');
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

function followersOver30() {
  let mostOver30 = data.f01;
  let currentPerson;
  for (let people in data) {
    currentPerson = data[people];
    currentPerson.getFollowers(30,99);
    if (currentPerson.followers > mostOver30.followers) {
      mostOver30 = currentPerson;
    }
  }
  console.log(mostOver30.name + ' has the most followers over 30 years of age');
}

followersOver30();


console.log(data);