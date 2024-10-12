import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import loader from "../asset/images/loader.gif";

const Explore = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=12&page=${page}`,
          {
            headers: {
              'x-api-key': process.env.REACT_APP_CAT_API_KEY,
            },
          }
        );
        const data = await response.json();
        setCats((prevCats) => [...prevCats, ...data]);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 sm:p-8 md:p-16">
      <h2 className="text-3xl text-white font-bold mb-6 gradient-text text-center">
        Meet Some Adorable Cats!
      </h2>
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {cats.map((cat) => (
            <Link to={`/cats/${cat.id}`} key={cat.id} className="group">
              <div className="relative overflow-hidden rounded-lg h-[200px] sm:h-[250px] md:h-[300px]">
                <img
                  src={cat.url}
                  alt={`Cat ${cat.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div ref={loaderRef} className="h-10"></div>
    </div>
  );
};

export default Explore;
