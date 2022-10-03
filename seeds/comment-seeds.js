const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is so neat.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'I dont know about this.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Maybe you want to get this spellchecked.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Great read!',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Is this true?',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Great resource.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'I would love to read more!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'I have never heard of this before',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Reaaaaally well written',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Whens the nxt article :)',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Jumping spiders are cute',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'This has nothing to do with the title imo',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: '0/10 would not read again',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Many of lifes failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Well this was an interesting read',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'just plain boring.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'i think this deserves another post!',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'The real test is not whether you avoid this failure, because you wont. Its whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'wow',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'soooo when are you posting more? Im hooked!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Any other resources I can look at for this?',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      '"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -Henry Ford',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'its not that simple',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'huh interesting',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'how long did it take you to write this',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'you misspelled your. its supposed to be youre',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Cool read',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'how can i contact you about this',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'check out my post!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Can i use this in an article im writing',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'interesting concept',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'just the two of us',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'you can make it if you try',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'just the two of us. again.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'do you get it?',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'i get it',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'it be like that',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: 'and sometimes like that it be',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'if i had a nickle for every time I was doomed by a puppet, Id have two nickles. Which isnt a lot, but its weird it happened twice',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'a platypus?',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'perry the platypus!',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'um twas many and many a year ago',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'something about a raven quoting things',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'nevermore',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'it me',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'why so serious',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'y haf be mad is only gaem',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
