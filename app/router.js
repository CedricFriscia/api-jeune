const express = require("express");

// CONTROLLER //

const candidatController = require("./controllers/candidatController");

const router = express.Router();

// ROUTES //

router.get("/candidats", candidatController.getAllCandidat);
router.get("/candidats/:id", candidatController.getOneCandidat);
router.post("/candidats", candidatController.createCandidat);
// router.put("/candidats", candidatController.modifyCandidat);
router.delete("/candidats", candidatController.deleteCandidat);

module.exports = router;
