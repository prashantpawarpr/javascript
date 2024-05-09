const user = {
  username: "prashant",
  price: 99,
  welcomeMessage: "hello world",
  welcome: function () {
    console.log(this);
    console.log(`${this.username} is logged in `);
  },
  welcome2: () => {
    console.log(`${this.username}is logged in again via`);
    console.log(this);
  },
};
function One() {
  console.log(this);
}
One();

user.welcome();
user.username = "pawar";
user.welcome();
user.welcome2();
