const express = require('express');
const router = express.Router();

const { getEtages,
    addEtages,
    updateEtages,
    deleteEtages
} = require('../controllers/etages');



router.route('/')
    // Pour recevoir les informations
    .get(getEtages)

    // Pour pouvoir ajouter et recevoirs le DATA j'utilise
    // Postman

    // Pour enregistrer les informations
    .post(addEtages);

// Pour actualiser les données
router.route('/:id')
    .put(updateEtages)

    // Pour la suppresions des données
    .delete(deleteEtages)


module.exports = router;