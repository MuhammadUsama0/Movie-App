import React, { useEffect, useState } from 'react';
import Movieitems from './Movieitems';
import axios from 'axios';

  const Movielist = () => {
  const [items, setItems] = useState([]);
  {items.map((item) => (
  <Movieitems key={item.id} item={item} />
))}


  useEffect(() => {
    const key = '2c2ff111934687367af0997b76d1507c';

    const getMovieData = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
        setItems(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    getMovieData();
  }, []); // Make sure to pass an empty dependency array to useEffect

  return (
    <div>
      <div className='container'>
        <div className='row'>
        {items.map((item) => (
  <Movieitems key={item.id} item={item} />
))}

          {/* Pass the fetched items to Movieitems component */}
          <Movieitems items={items} />
        </div>
      </div>
    </div>
  );
};

export default Movielist;
