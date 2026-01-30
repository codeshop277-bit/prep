const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log('result', result)
    if(!result){
        return res.status(400).json({
            message: 'Validation Failed',
            errors: result.error.errors.map((e) => e.message)
        })
    }
    req.body = result.data;
    next();
};


const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach payload
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired access token" });
  }
};
module.exports = {validate, authenticate};

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};
// ?Oauth
const { Issuer } = require("openid-client");

let client;

async function initClient() {
  const issuer = await Issuer.discover(
    "http://localhost:8080/realms/myrealm"
  );

  client = new issuer.Client({
    client_id: "app-client",
    client_secret: "your-client-secret",
    redirect_uris: ["http://localhost:3000/callback"],
    response_types: ["code"]
  });
}

function getClient() {
  return client;
}

module.exports = { initClient, getClient };

const express = require("express");
const session = require("express-session");
const { initClient, getClient } = require("./auth");

const app = express();

app.use(session({
  secret: "super-secret",
  resave: false,
  saveUninitialized: false
}));

(async () => {
  await initClient();
})();

app.get("/login", (req, res) => {
  const client = getClient();

  const authUrl = client.authorizationUrl({
    scope: "openid profile email"
  });

  res.redirect(authUrl);
});

app.get("/callback", async (req, res) => {
  const client = getClient();

  const params = client.callbackParams(req);
  const tokenSet = await client.callback(
    "http://localhost:3000/callback",
    params
  );

  const userInfo = await client.userinfo(tokenSet.access_token);

  req.session.user = userInfo;

  res.redirect("/");
});

app.get("/", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  res.send(`Hello ${req.session.user.name} from App A`);
});

app.listen(3000, () => {
  console.log("App A running on http://localhost:3000");
});
