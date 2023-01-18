db = db.getSiblingDB('sharenergy');

db.createCollection('User');

db.User.insertMany([
  {
    cpf: 142371056644,
    email: 'wellington.engps@gmail.com',
    name: 'Wellington Pereira Silva',
    phoneNumber: 33999938459,
    address: 'Juiz de Fora',
  },
  {
    cpf: 142371056643,
    email: 'wellington.engps@gmail.com',
    name: 'Wellington Pereira Silva',
    phoneNumber: 33999938459,
    address: 'Juiz de Fora',
  },
]);
