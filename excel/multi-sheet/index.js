const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://cloud.puredocx.com
var puredocx = new Puredocx(process.env.PUREDOCX_LICENSE_API_KEY)

var substitutions = {
    "fruit": [{
        "fruit": "banana",
        "addr": "Starry Sky Road 555",
        "category": [{ brand: "Prickly pear banana", weight: "500g", sales: 7000 }, { brand: "Saigon banana", weight: "550g", sales: 6000 }, { brand: "milk banana", weight: "390g", sales: 7500 }]
    }, {
        "fruit": "apple",
        "addr": "Gutai Road",
        "category": [{ brand: "Red Fuji", weight: "500g", sales: 700 }, { brand: "Guoguang", weight: "550g", sales: 680 }, { brand: "Luochuan", weight: "390g", sales: 230 }]
    }]

};


puredocx.render("multi-sheet.xlsx", substitutions, "output.xlsx")