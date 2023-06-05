import KhaltiCheckout from 'khalti-checkout-web'
import { toast } from 'react-toastify'
import { Campaign, Interaction } from '@/types'
import { editDonation } from '@/firebase'
import { addInteraction } from '@/firebase/firebase'
const KhaltiPay = (data: Interaction, campaignData: Campaign) => {
  let config = {
    // replace this key with yours
    // "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    publicKey: 'test_public_key_9029a631a9b1419c9eaf6e46e7898731',
    productIdentity: data.fundraiserId,
    userId: data.userId,
    category: campaignData.category,
    productName: campaignData.title,
    productUrl: `https://fund-raiser-ashy.vercel.app/campaign-detail/${data.fundraiserId}`,
    eventHandler: {
      async onSuccess(payload: any) {
        // hit merchant api for initiating verfication
        console.log(payload)
        console.log({ data })
        await editDonation(data.fundraiserId, {
          ...campaignData,
          currentAmount:
            parseInt(campaignData.currentAmount) +
            parseInt(data.donationAmount),
        })
        await addInteraction(data)
        toast.success('Donation Successful. Thank you for your support.', {
          className: 'toast-success',
        })
      },
      // onError handler is optional
      onError(error: any) {
        // handle errors
        console.log(error)
        toast.error('Error Occured during Donation')
      },
      onClose() {
        // console.log('widget is closing')
      },
    },
    paymentPreference: [
      'KHALTI',
      'EBANKING',
      'MOBILE_BANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  }

  const khaltiCheckout = new KhaltiCheckout(config)

  return khaltiCheckout
}

export default KhaltiPay

// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//     // minimum transaction amount must be 10, i.e 1000 in paisa.
//     checkout.show({amount: 1000});
// }
