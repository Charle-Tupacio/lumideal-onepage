async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

async function Obteniendo() {
  const posts = await loadPosts();
  console.log(posts);
  return <div>getting-data</div>;
}

export default Obteniendo;
