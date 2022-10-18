const db = require('../../database/models');
const { usuario } = require('../usersController');
const sequelize = db.sequelize;

const userscontroller = {


    users: async (req, res) => {

        try {

            const userDB = await db.user.findAll();


            if (userDB) {
                const totaluser = userDB.length;
                const users = userDB.map(user => {
                    return {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: `https://grupo-1-e-books.herokuapp.com/api/user/${user.id}`
                    }
                })

                res.status(200).json({
                    "count": totaluser,
                    "users": users,
                    "status": 200,
                    "msg": "ok",
                    "endpoint": "/api/users"
                });
            } else {
                res.status(404).json({ 'msg': 'No hay datos para mostrar' });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

        }

    },
    usersdetail: async (req, res) => {

        try {

            const userDB = await db.user.findOne({ where: { id: req.params.id } });


            if (userDB) {


                res.status(200).json({
                    id: userDB.id,
                        first_name: userDB.first_name,
                        last_name: userDB.last_name,
                        email: userDB.email,
                        image: `https://grupo-1-e-books.herokuapp.com/images/users/${userDB.image}`,
                        "status": 200,
                        "msg": "ok",
                        "endpoint": `/api/users/${userDB.id}`
                });
            } else {
                res.status(404).json({ 'msg': 'No hay datos para mostrar' });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

        }

    }
}

module.exports = userscontroller;