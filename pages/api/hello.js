// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default (req, res) => {
  res.status(200).json(getUsers())
}

const getUsers = () => {
  let userList = [];
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => console.log(users))
  .catch(e => console.log(e));
  return userList;
}