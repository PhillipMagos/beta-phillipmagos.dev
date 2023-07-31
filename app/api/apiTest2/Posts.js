import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/?limit=2');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <h1>Stuff to Buy</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>${post.price}</p>
            <p>Category: {post.category}</p>
            <p>Description: {post.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
