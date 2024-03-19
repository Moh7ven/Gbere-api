import Users from "../models/Users.js";
import bcrypt from "bcrypt";

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
