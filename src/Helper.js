// Helper methods for a get, post, or put request.


export const get = async (url) =>
{
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}


// Post request & await data => return json
export const post = async (url, data) =>
{
    let res = await fetch(url, {method: 'POST', body: JSON.stringify(data), 
    headers: {
      'Content-Type': 'application/json' // Denote we are sending JSON data.
    }});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
    else {
        return null;
    }
  }

  export const put = async (url, data) =>
  {
    let res = await fetch(url, {method: 'PUT', body: JSON.stringify(data), 
    headers: {
      'Content-Type': 'application/json' // Denote we are sending JSON data.
    }});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
    else {
        return null;
    }
  }