const Puredocx = require("puredocx");

// Make sure to load your metered License API key prior to using the library.
// If you need a key, you can sign up and create a free one at https://puredocx.com
var puredocx = new Puredocx()

puredocx.setMeteredKey(process.env.PUREDOCX_LICENSE_API_KEY)

var substitutions = {
    chart: {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        series: [
            {
                name: 'Email',
                type: 'pie',
                stack: 'Total',
                data: [{ value: 120, name: "Mon" }, { value: 132, name: "Tue" }, { value: 101, name: "Wed" }, { value: 134, name: "Thu" }, { value: 90, name: "Fri" }, { value: 230, name: "Sat" }, { value: 210, name: "Sun" }]
            }
        ]
    }
};


puredocx.render("chart-pie.docx", substitutions, "output.docx")