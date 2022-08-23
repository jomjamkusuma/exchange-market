const crypto = require("crypto");

let api_secret = process.env.SATANG_API_SECRET;

let signer = (apiSecret, str) => {
  let hmac = crypto.createHmac("sha512", apiSecret);
  let signed = hmac.update(str).digest("hex");

  return signed;
};

let request_header =
  "amount=1&nonce=2731832&pair=usdt_thb&price=31&side=buy&type=limit";

let signed = signer(api_secret, request_header);

console.log("signed::", signed);
