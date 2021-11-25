const { randomBytes } = require("crypto");

const { hash } = require("bcrypt");

module.exports = {
  generateJWT: function (req, res, next) {
    var { bytes } = req.body;
    if (!bytes) bytes = 64;
    if (bytes.startsWith('-')) bytes = 1; 
    let tken = randomBytes(parseInt(bytes)).toString("hex");
    let rfsh = randomBytes(parseInt(bytes)).toString("hex");
    req.flash("info", { jwt_token: tken, jwt_refresh: rfsh });
    return res.redirect("/jwt");
  },
  generateSession: function (req, res, next) {
    var { bytes } = req.body;
    if (!bytes) bytes = 32;
    if (bytes.toString().startsWith('-')) bytes = 1; 
    req.flash("info", {
      session_secret: randomBytes(parseInt(bytes)).toString("hex"),
    });
    return res.redirect("/session");
  },
  hashPassword: async function (req, res, next) {
    var { password, salt } = req.body;
    if (!password) bytes = null;
    if (!salt) salt = 10;
    if (salt.startsWith('-')) salt = 1; 
    req.flash("info", {
      pw_hash: await hash(password, parseInt(salt)),
    });
    return res.redirect("/password");
  },
};
