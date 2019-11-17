async function ajax(url, options) {
  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status >= 400) {
    throw new Error(data);
  }

  return data;
}

export default {
  get: url => {
    const options = {
      method: 'GET',
    };

    return ajax(url, options);
  },
  post: (url, data) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return ajax(url, options);
  },
};
