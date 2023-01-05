const newKey = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    body: JSON.stringify({ name: 'New Key' }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const data = await res.json();
  console.log(data);
};

newKey();

export default newKey;