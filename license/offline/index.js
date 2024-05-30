const Puredocx = require("puredocx");

// Illustrates how to load an offline (perpetual) license key.
// Offline keys can be purchased at https://puredocx.com
var puredocx = new Puredocx()

puredocx.setLicenseKey(process.env.PUREDOCX_LICENSE_KEY)


puredocx.render("chart-bar.docx", substitutions, "output.docx")