# Examples

This example repository demonstrates many use cases for mllx87's PureDocx Js library. Example code should make
it easy for users to get started with PureDocx and address specific use cases. Feel free to add to this by submitting
a pull request.

## Structure
The folder hierarchy is as follows:

- `word/` folder contains examples for processing Word DOCX document files.
- `excel/` folder contains examples for processing Excel XLSX spreadsheet files.
- `powerpoint/` folder contains examples for processing Powerpoint PPTX presentation files.
- `license/` folder contains examples for using metered api key license and offline license files.

## License codes
PureDocx requires license codes to operate, there are two options:

Metered License API keys: Free ones can be obtained at https://puredocx.com
Offline Perpetual codes: Can be purchased at https://puredocx.com/pricing
Most of the examples demonstrate loading the Metered License API keys through an environment variable PUREDOCX_LICENSE_API_KEY.

Examples for Offline Perpetual License Key loading can be found in the license subdirectory.


# PureDocx License Loading.

The examples here illustrate how to work with PureDocx license codes.

## Offline License
Offline licenses are cryptography based and contain full signed information that is verified based on signatures without making any outbound connections, hence the name "offline". This kind of license is suitable for users deploying OEM products to their customers or where there are strict restrictions on outbound connections due to firewalls and/or compliance requirements.

## Metered License (API keys)
The metered license is the most convenient way to get started with UniDoc products and the Free tier enables a powerful way to get started for free.
Anyone can get a free metered API key by signing up on https://puredocx.com

