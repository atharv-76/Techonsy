  const express = require("express");
  const User = require("../../../../models/user");

  const router = express.Router();

  // Register Endpoint
  router.post("/", async (req, res) => {
      console.log(req.body);
    const { firstName, lastName, email, phone, password, role } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ error: "User already exists" });

      const user = new User({ firstName, lastName, email, phone, password, role });
      console.log(user);
      
      res.status(200).json(
      { 
          status: 201,
          message: "User registered successfully" ,
          data : user,
      });

      await user.save();
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

  module.exports = router;
