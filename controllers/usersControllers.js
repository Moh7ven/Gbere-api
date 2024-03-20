import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//FONCTION POUR S'INSCRIRE
export const signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      /* if () {
            
        } */

      const User = new Users({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });

      User.save()
        .then(() => {
          res.status(200).json({
            /*  message: `Bravo, vous avez été bien enregistré, Vous recevrez un email à l'adresse ${req.body.emailNanien} pour confirmer votre compte.`, */
            message: "Vous avez été bien enregistrer",
          });

          /* const confirmationEmail = new ConfirmationEmail({
              email: req.body.emailNanien,
              code: code,
            });
  
            confirmationEmail
              .save()
              .then(() => {
                console.log(`Email et code:  ${code} enregistrés`);
              })
              .catch((error) => {
                console.error(error);
              });
  
            codeEmail(req.body.emailNanien, code)
              .then((info) => {
                console.log("Email envoyé : " + info.response);
              })
              .catch((error) => {
                console.error(error);
              });*/
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

//FONCTION POUR SE CONNECTER
export const login = (req, res) => {
  Users.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Email ou Mot de passe incorrect !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "Email ou Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
            message: "Connexion reussie",
          });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
