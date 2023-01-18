rs.status();
db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [{ role: 'root', db: 'admin' }],
});

db = db.getSiblingDB('sharenergy');

db.createCollection('User');

db.User.insertMany([
  {
    cpf: 142371056644,
    email: 'maurice.jackson@example.com',
    name: 'Maurice Jackson',
    phoneNumber: 5623018366,
    address: '3927 Brown Terrace',
  },
  {
    cpf: 142371056643,
    email: 'wellington.engps@gmail.com',
    name: 'Wellington Pereira Silva',
    phoneNumber: 33999938459,
    address: 'Juiz de Fora',
  },
]);
