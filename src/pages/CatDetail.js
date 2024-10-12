import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../asset/images/loader.gif";

const CatDetail = () => {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatDetail = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/${id}`,
          {
            headers: {
              "x-api-key": process.env.REACT_APP_CAT_API_KEY,
            },
          }
        );
        const data = await response.json();
        setCat(data);
      } catch (error) {
        console.error("Error fetching cat details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 sm:p-8 lg:p-16 flex justify-center items-center">
        <img src={loader} alt="Loading..." />
      </div>
    );
  }

  if (!cat) {
    return <div className="p-4 sm:p-8 lg:p-16">Cat not found</div>;
  }

  const catDesc = [
    { name: "Adaptability", val: "40%" },
    { name: "Energy Level", val: "80%" },
    { name: "Health Issue", val: "100%" },
    { name: "Intelligence", val: "75%" },
    { name: "Child Friendly", val: "65%" },
    { name: "Dog Friendly", val: "35%" },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-16 lg:py-40 py-28">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={cat.url}
            alt={`Cat ${cat.id}`}
            className={`rounded-lg w-full h-auto ${loading ? "hidden" : "block"}`}
            style={{ display: loading ? "none" : "block" }}
          />
          {loading && (
            <div className="h-60 bg-gray-200 rounded-lg animate-pulse"></div>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl text-white font-bold">Scuttlebutt (USA)</h1>
          <p className="text-gray-300 text-md mt-5 font-semibold">
          The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-10 mt-8">
            <p className="text-orange-200 font-bold text-xl">
              <span className="text-white text-lg">Width: </span>
              {cat.width}
            </p>
            <p className="text-orange-200 font-bold text-xl">
              <span className="text-white text-lg">Height: </span>
              {cat.height}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            {catDesc.map((desc, key) => (
              <div key={key}>
                <div className="mb-1 text-base font-medium text-white">
                  {desc.name}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                  <div
                    className="bg-orange-600 h-1.5 rounded-full"
                    style={{ width: desc.val }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetail;
