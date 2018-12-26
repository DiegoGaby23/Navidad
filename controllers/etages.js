// J'utilise un controller pour bien organiser mon code

const { etages } = require('../db.json');

module.exports = {
    getEtages: (req, res) => {
        res.json({ etages })
    },


    addEtages: (req, res) => {
        const { name } = req.body;
        etages.push({
            name,
            id: etages.length
        })

        // J'envoie un message un Json qui me permet de savoir
        // que les informations ont bien étaient enregistrer
        res.json({
            'Succes': true,
            'msg': 'Successfully added !'
        });
    },

    updateEtages: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        etages.forEach((etage, i) => {
            if (etage.id === Number(id)) {
                etage.name = name;
            }
        });
        res.json({
            'Succes': true,
            'msg': 'Successfully updated !'
        });
    },

    deleteEtages: (req, res) => {
        const { id } = req.params;
        etages.forEach((etage, i) => {
            if (etage.id === Number(id)) {
                etages.splice(i, 1);
            }
        });
        res.json({
            'Succes': true,
            'msg': 'Deleted !'
        })

    }


};
