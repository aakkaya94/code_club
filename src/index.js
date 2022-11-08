// Returning different JSON answers for POST and NON-Post requests

const post_answer = {
	  Request_type: 'POST',
	};
	const nonpost_answer = {
		Request_type: 'Non-POST',
	  };
  
	  /*
The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
*/
	const json_post = JSON.stringify(post_answer, null, 2);
	const json_nonpost = JSON.stringify(nonpost_answer, null, 2);


 addEventListener('fetch', event => {

	let request = event.request;
	
	if (request.method.toUpperCase() === 'POST' ) 
	{
		return event.respondWith(
			new Response(json_post, {
			  headers: {
				'content-type': 'application/json;charset=UTF-8',
			  },
			})
		  );
	}
	else
	{
		return event.respondWith(
			new Response(json_nonpost, 
				{
			  headers: {
				'content-type': 'application/json;charset=UTF-8',
			  },
			})
		  );	
	}

	
  });




  