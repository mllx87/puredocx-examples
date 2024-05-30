const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://puredocx.com
var puredocx = new Puredocx('H326l8YciepQp0yIh4Qy2ijNbd4')

var substitutions = {
    "watermark":"mllx",
};


puredocx.render("watermark.docx", substitutions, "watermark-output.docx")