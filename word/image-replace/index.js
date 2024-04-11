const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://cloud.puredocx.com
var puredocx = new Puredocx(process.env.PUREDOCX_LICENSE_API_KEY)

var substitutions = {
    "src":"99e36.jpeg"
};


puredocx.render("image-replace.docx", substitutions, "output.docx")