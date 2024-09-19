db = db.getSiblingDB("tododock");

db.createUser({
  user: "user",
  pwd: "mCrbX6TT",
  roles: [
    {
      role: "readWrite",
      db: "tododock",
    },
  ],
});
