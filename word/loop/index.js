const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://puredocx.com
var puredocx = new Puredocx()

puredocx.setMeteredKey(process.env.PUREDOCX_LICENSE_API_KEY)

var substitutions = {
    "cars":[{name:"byd",price:"30w",color:"silver"},{name:"m9",price:"35w",color:"red"}],
    "phones":[{brand:"p7",weight:"500g",sales:7000},{brand:"i9",weight:"550g",sales:6000},{brand:"p9",weight:"390g",sales:7500}]
};


puredocx.render("loop.docx", substitutions, "output.docx")