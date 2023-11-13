const { Candidat } = require("../models/Candidat");
const fs = require("fs");

const candidatController = {
   getOneCandidat: async (req, res) => {
      try {
         const candidatId = req.params.id;
         const candidat = await Candidat.findByPk(candidatId);

         if (!candidat) {
            return res
               .status(404)
               .json("Candidat introuvable avec l'ID " + candidatId);
         } else {
            return res.json(candidat);
         }
      } catch (error) {
         console.error(error);
         return res.status(500).json(error);
      }
   },

   getAllCandidat: async (req, res) => {
      try {
         const candidats = await Candidat.findAll();
         if (!candidats || candidats.length === 0) {
            return res.status(404).json("Aucun candidat trouvé.");
         } else {
            return res.status(200).json(candidats);
         }
      } catch (error) {
         console.error(error);
         return res.status(500).json(error);
      }
   },

   createCandidat: async (req, res) => {
      try {
         const {
            firstname,
            lastname,
            birthday,
            search,
            linkedin,
            description,
         } = req.body;

         let bodyErrors = [];
         if (!firstname) {
            bodyErrors.push(`Le prénom ne peut pas être vide`);
         }
         if (!lastname) {
            bodyErrors.push(`Le nom de famille ne peut pas être vide`);
         }
         if (!birthday) {
            bodyErrors.push(`La date de naissance ne peut pas être vide`);
         }
         if (!search) {
            bodyErrors.push(`La recherche ne peut pas être vide`);
         }
         if (!linkedin) {
            bodyErrors.push(`Le lien LinkedIn ne peut pas être vide`);
         }
         if (!description) {
            bodyErrors.push(`La description ne peut pas être vide`);
         }
         if (bodyErrors.length > 0) {
            return res.status(400).json(bodyErrors);
         } else {
            let newCandidat = Candidat.build({
               firstname,
               lastname,
               birthday,
               search,
               linkedin,
               description,
            });
            await newCandidat.save();
            return res.json(newCandidat);
         }
      } catch (error) {
         console.error(error);
         return res.status(500).json(error);
      }
   },

   deleteCandidat: async (req, res) => {
      try {
         const candidatId = req.params.id;
         let candidat = await Candidat.findByPk(candidatId);

         if (!candidat) {
            return res
               .status(404)
               .json(`Cant find candidat with id ${candidatId}`);
         } else {
            await candidat.destroy();
            res.json("OK");
         }
      } catch {
         console.trace(error);
         res.status(500).json(error);
      }
   },
};

module.exports = candidatController;
