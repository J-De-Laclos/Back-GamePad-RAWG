const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/game", async (req, res) => {
  const id = req.query.id || "";
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${process.env.KEY_RAWG}`,
      {
        headers: { "accept-encoding": "*" },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
