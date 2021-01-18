const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
const User = mongoose.model('User', { name: String, age: String, location: String, avatar: String });

const sequelize = new Sequelize("sqlite:./main.db", {
    logging: false,
    dialect: "sqlite",
    define: {
      timestamps: false,
    },
});
class User extends Model {}
User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    { sequelize, modelName: "Users" }
  );
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;




(async () => {
    app.get('/users',async(req, res) => {
        User.find({}, (err, users) => {
            res.send(users);  
          });
    });

    app.get('/user/:id',async(req,res) => {
        let user = User.findOne({_id : req.params.id});

        if (user == null)
            res.status(404).send('{"code":404}');
        else 
            res.status(201).send(user);
    });

    app.post('/user', async (req, res) => {
        const user = new User({ name: req.body.name, age: req.body.age, location: req.body.location, avatar: req.body.avatar });
        user.save();

        res.status(201).send('{"code":201}');
    });

    app.delete('/user/:id', async(req, res) => {
        User.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.status(404).send('{"code":404}');
                console.log(err);
            } else {
                res.status(201).send('{"code":201}');
            }
        });
    });
    
    app.listen(port, () => {
        console.log(`Сервер был запущен: http://localhost:${port}\n`);
    });

})();