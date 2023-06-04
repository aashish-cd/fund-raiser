var requestp= require('request-promise');
export default async function handler(req, res) {
    // try {
    //   const response = await fetch('https://api.example.com/data');
    //   const data = await response.json();
    //   res.status(200).json(data);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }

    
	var KHALTI_VERIFY = 'https://khalti.com/api/v2/payment/verify/';
    let SECRET_KEY = process.env.SECRET_KEY;
	let options = {
	  method: 'POST',
	  uri: KHALTI_VERIFY,
	  body: JSON.stringify({
	    'token': req.body.token,
	    'amount': req.body.amount
	  }),
	  headers: {
	    "Authorization": `Key ${SECRET_KEY}`,
	    "Content-Type": 'application/json'
	  }
	}
	requestp(options)
	.then((result)=>{
	  console.log('charged', result);
	    res.jsonp({
	      data: result,
	      status: "success"
	    });
	})
	.catch((error)=> {
	  res.status(500).send({
			error: error.response.data,
			status: 'failed',
		});
	});

}
  