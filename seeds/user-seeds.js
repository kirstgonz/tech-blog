const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'saltminer',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'photocopyingstuff',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'igetfreeprinting',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'playerownedproperty',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'hippityhoppity',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'databit',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'dnddb',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: '6nodder6',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'n00bkllur',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'kyles1',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;