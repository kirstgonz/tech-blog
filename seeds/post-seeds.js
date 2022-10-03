const { Post } = require('../models');

const postdata = [
  {
    title: 'Play DND',
    post_url: 'https://roll20.net/welcome',
    user_id: 10
  },
  {
    title: 'Stuff for DMs.',
    post_url: 'https://www.dmsguild.com/',
    user_id: 8
  },
  {
    title: 'AITA because my cat naenaed on my aunts grave',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: '10 signs you might be harry potter',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Breaking news: new is broken',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Heyoooo first post!',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'How to craft your witch',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'its morbin times',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'help my boyfirned is reidiculous',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: '10.5 signs you need glass (you wont believe the 5th one!)',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'selection of locations for research',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'mosses, lichens, and ferns of nw north america',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'honey i shrunk the kids',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nutella. That is all.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'season 20 of any show is not good',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Land can also be acquired by inheritance or other means. Royal charters and land grants are usually given by the crown as a reward for faithful service, although they can also be bought. Deeds can be bought or inherited.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Space and all the cool things in it',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Looking for people to play video games with!',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Isnnt this a tech websiet',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'bailar contigo beber el agua',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;