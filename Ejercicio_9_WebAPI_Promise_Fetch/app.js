function userRequest() {
  const respuesta = prompt('En cuantos segundos desea que se muestre el mensaje?');
  setTimeout(() => {
    const fetchPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo llamar la API' + response.statusText);
          }
          return response.json();
        })
        .then(posts => {
          console.log(posts);
        })
    }
    fetchPosts()
  }, respuesta*1000);

}

userRequest()