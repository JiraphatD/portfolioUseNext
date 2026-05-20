import React, { useEffect } from "react";
import Image from "next/image";
import profile from "../../public/photo/blazer.png";
import { Grid } from "@mui/material";
// import { getTodos } from "../api/api";
function My() {
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // const data = await getTodos();
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch todos:", err);
      }
    };

    fetchTodos();
  }, []);
  return (
    <>
      <div className="glow-circle circle-2"></div>
      <div className="glow-circle circle-3"></div>
      <div className="glow-circle circle-4"></div>
      <Grid container className="bg-gray-950 pt-10">
        <Grid item lg={5} xs={12} className="h-screen relative ">
          <div>
            <Image
              src={profile}
              alt="myProfile"
              className="z-0 absolute bottom-0"
            />
            <div className="absolute name-text py-10">
              <p className="mx-20">JIRAPHAT</p>
              <p className="mx-40">WUNPUAN</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={7} xs={12} className="px-3 z-10 flex-col items-center">
          <p className="text-gray-50 uppercase hi-text">
            <span>Hello</span>, I'm a back-end developer with a deep interest in
            web and software development.
          </p>
          <p className="uppercase text-gray-50 text-xl mt-10">
            <span>
              I graduated from King Mongkut's Institute of Technology Ladkrabang
              with a Bachelor of Science in Information Technology.
            </span>{" "}
            <br></br>
            <br></br>
            <span>
              I currently work as a Back-End Developer at Internet Thailand PCL.
            </span>
          </p>
        </Grid>
      </Grid>
      <div className="flex items-center justify-center h-screen">
        <div className="relative uppercase">
          {/* <button
            onClick={async () => {
              try {
                const data = await getTodos();
                console.log(data);
              } catch (err) {
                console.error("Failed to fetch todos:", err);
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fetch API
          </button>*/}
          <p className="text-center uppercase">
            this is my work and experience
          </p>
          <p>you can click image to view information</p>
        </div>
      </div>
    </>
  );
}

export default My;
