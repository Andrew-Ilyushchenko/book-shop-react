import React from 'react'

interface ILoginRequestData {
    email: string;
    password: string;
}

const loginRequest = async ({ email, password }: ILoginRequestData) => {
    const responseJSON = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
		  title: email,
		  body: password,
		  userId: new Date()
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })

      const response = await responseJSON.json();
      
	  return response
}

export default loginRequest