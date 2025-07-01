import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData();
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Suvanshsehgal")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   });
  return (
    <div
      className="text-center m-4
    bg-gray-600 text-white p-4"
    >
      Github Followers :{data.followers}
    </div>
  );
}

export default Github;

export const Githubinfo = async () => {
  const response = await fetch("https://api.github.com/users/Suvanshsehgal");
  return response.json();
};
