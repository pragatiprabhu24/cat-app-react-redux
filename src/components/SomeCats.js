import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loader from "../asset/images/loader.gif";
import { useNavigate } from "react-router-dom";

const SomeCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=12"
        );
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <>
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
      </div>
      <div className="flex justify-center mt-10 mb-10">
        <button
          type="button"
          onClick={() => navigate("/explore")}
          className="text-white border-2 border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-xl px-5 py-2.5 text-center transition duration-300"
        >
          Explore more cute cats...
        </button>
      </div>
    </>
  );
};

export default SomeCats;
