const express = require("express");
const faker = require("faker")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User {
  constructor() {
    this.id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor() {
    this.id = faker.datatype.number();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

app.get('/api/users/new', (req, res) => {
  const newUser = new User();
  res.json(newUser)
})
app.get('/api/companies/new', (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
})

app.get('/api/user/company', (req, res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({user: newUser, company: newCompany});
})

// const newUser = new User();
// const newUser1 = new User();
// const newUser2 = new User();
// const newCompany = new Company();
// console.log(newUser1, newUser2, newCompany);

const server = app.listen(8000, () => {
  console.log('listening on ' + server.address().port)
})