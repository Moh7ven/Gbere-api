import jwt from "jsonwebtoken";

// Middleware to check if user is authenticated
export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    req.auth = {
      userId: userId,
    };

    /*Pour empêcher tout intrusion dans la base de donnée sans id */
    if (!req.auth.userId) {
      res.status(401).json({
        error: "Invalid user ID",
        message: "Vous n'etes pas autorisé",
        status: false,
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error,
      message:
        "Une erreur est survenue lors de la vérification du token. Veuillez vous reconnecter.",
    });
  }
};
