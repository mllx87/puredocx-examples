const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://puredocx.com
var puredocx = new Puredocx()

puredocx.setMeteredKey(process.env.PUREDOCX_LICENSE_API_KEY)

var substitutions = {
    "title": "hello",
    "summary": "New World",
    "staff": 30,
    "company": "mllx"
};


puredocx.render("simple.pptx", substitutions, "simple-output.pptx")