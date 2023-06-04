import KhaltiCheckout from "khalti-checkout-web";

const KhaltiPay = () => {
    let config = {
        // replace this key with yours
        // "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
        "publicKey": "test_public_key_9029a631a9b1419c9eaf6e46e7898731",
        "productIdentity": "1234567890",
        "userId":"345677",
        "category":"childcare",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess (payload) {
                // hit merchant api for initiating verfication
                console.log(payload);

            },
            // onError handler is optional
            onError (error) {
                // handle errors
                console.log(error);
            },
            onClose () {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };
    
    
    
    const khaltiCheckout = new KhaltiCheckout(config);

    return khaltiCheckout;
}

export default KhaltiPay;

// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//     // minimum transaction amount must be 10, i.e 1000 in paisa.
//     checkout.show({amount: 1000});
// }