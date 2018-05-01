let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

// graphql schema
let schema = buildSchema(`
    type User {
       id: String!
       user: String!
       avatar: String!
    }
    type Post {
        id: String!
        user: User!
        caption: String!
        image: String!
    }
    type Query {
      user(id: String) : User!
      post(user_id: String, post_id: String) : Post!
      posts(user_id: String) : [Post]
    }
`);

// Maps id to User object
let userslist = {
    a: {
      id: "a",
      user: "Tiger Boy",
      avatar: "https://instagram.fsea1-1.fna.fbcdn.net/vp/ef9dafdc3424396a93ceafe62a67c924/5B97CD8C/t51.2885-19/11910247_523884977763198_2136433250_a.jpg"
    },
    b:  {
        id: "b",  
        user: "Tiggy Pop",
        avatar: "https://instagram.fsea1-1.fna.fbcdn.net/vp/ef9dafdc3424396a93ceafe62a67c924/5B97CD8C/t51.2885-19/11910247_523884977763198_2136433250_a.jpg"
    }
};

// The root provides a resolver function for each API endpoint
  let postslist = {
    a: {
      a: {
        id: "a",
        user: userslist["a"],
        caption: "this is a",
        image: "https://instagram.fsea1-1.fna.fbcdn.net/vp/42132cbf165b8e57037dba32357c2b6d/5B7A688D/t51.2885-15/e35/25024957_1938230393163639_8963493349709316096_n.jpg"
      },
      b: {
        id: "b",
        user: userslist["a"],
        caption: "this is b",
        image:
          "https://instagram.fsea1-1.fna.fbcdn.net/vp/42132cbf165b8e57037dba32357c2b6d/5B7A688D/t51.2885-15/e35/25024957_1938230393163639_8963493349709316096_n.jpg"
      },
      c: {
        id: "c",
        user: userslist["a"],
        caption: "this is c",
        image: "https://instagram.fsea1-1.fna.fbcdn.net/vp/42132cbf165b8e57037dba32357c2b6d/5B7A688D/t51.2885-15/e35/25024957_1938230393163639_8963493349709316096_n.jpg"
      },
      d: {
        id: "d",
        user: userslist["a"],
        caption: "this is d",
        image: "https://instagram.fsea1-1.fna.fbcdn.net/vp/42132cbf165b8e57037dba32357c2b6d/5B7A688D/t51.2885-15/e35/25024957_1938230393163639_8963493349709316096_n.jpg"
      }
    }
  };

  // The root provides a resolver function for each API endpoint
  let root = {
    user: function({ id }) {
      return userslist[id];
    },
    post: function({ user_id, post_id }) {
      return postslist[user_id][post_id];
    },
    posts: function({ user_id }){
      return Object.values(postslist[user_id]);
    }
  };

  let app = express();
  app.use(cors());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );

  // set application port
  app.listen(4000);