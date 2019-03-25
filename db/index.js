const conn = require('./conn')

const User = require('./User')
const Thing = require('./Thing')
const Favourite = require('./Favourite')

Favourite.belongsTo(User)
Favourite.belongsTo(Thing)

const usernames = ['moe', 'larry', 'curly', 'shep'];
const things = ['foo', 'bar', 'bazz', 'quq', 'quip'];

const syncAndSeed = ()=> {
  return conn.sync({ force: true })
    .then(()=> {
      return Promise.all([
        Promise.all(
          usernames.map( name => User.create({ name }))
        )
        .then( items => items.reduce((acc, item)=> {
          acc[item.name] = item;
          return acc;
        }, {}))
        ,
        Promise.all(
          things.map( name => Thing.create({ name }))
        )
        .then( items => items.reduce((acc, item)=> {
          acc[item.name] = item;
          return acc;
        }, {}))
        
      ]);
    })
    .then(([userMap, thingMap])=> {
      return Promise.all([
        Favourite.create({ userId: userMap.moe.id, thingId: thingMap.foo.id, rank: 7}),
        Favourite.create({ userId: userMap.moe.id, thingId: thingMap.bar.id, rank: 5}),
        Favourite.create({ userId: userMap.moe.id, thingId: thingMap.bazz.id, rank: 1}),
        Favourite.create({ userId: userMap.larry.id, thingId: thingMap.bazz.id, rank: 2},
        Favourite.create({ userId: userMap.larry.id, thingId: thingMap.bar.id, rank: 1}))
      ]);
    });
};


module.exports = {
  syncAndSeed,
  models: {
    User,
    Thing,
    Favourite
  }
}