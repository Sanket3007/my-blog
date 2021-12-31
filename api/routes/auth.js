const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    try {

        // use to hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        // take the data from body
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username }); // Finding the User
      !user && res.status(400).json("Wrong credentials!");              // not matching the username send the msg
  
      const validated = await bcrypt.compare(req.body.password, user.password); // compare the password with hashed one
      !validated && res.status(400).json("Wrong credentials!");                 // not matching the password send the msg
  
      const { password, ...others } = user._doc; // used for not sending the data to the user
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;