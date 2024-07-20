"use client"
import My from "./components/My";
import Horizon from "./components/Horizon";
import Learning from "./components/Learning";
import { Grid } from "@mui/material";
export default function Home() {
  return (
    <>
      <My />
      <Horizon />
      <div className="skill h-screen flex justify-center items-center uppercase">
        <div className="relative text-center">
          <Grid container>
            <Grid item lg={12} className="mySkill">
              <p>my skill that I have or the tool that I used to use</p>
            </Grid>
            <Grid item lg={4} xs={12}  className="mt-10">
              <p>HTML & CSS & JS</p>
              <p>python</p>
              <p>c language</p>
              <p>java</p>
              <p>nodejs</p>
              <p>react</p>
              <p>laravel</p>
              <p>WordPress</p>
            </Grid>
            <Grid item lg={4} xs={12}  className="mt-10">
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>Firebase</p>
            </Grid>
            <Grid item lg={4} xs={12}  className="mt-10">
              <p>github</p>
              <p>canva</p>
              <p>figma</p>
              <p>Microsoft Office</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Premiere Pro</p>
              <p>Adobe XD</p>
            </Grid>
          </Grid>
        </div>
      </div>
      <Learning />
      <footer className="float-right mr-10 mb-5">
        <h1 className="uppercase">contact</h1>
        <h2><span className="uppercase">tel : </span>093-091-0002</h2>
        <h2><span className="uppercase">email : </span>jiraphat.deaw@gmail.com</h2>
        <h2><span className="uppercase">facebook : </span>Jiraphat Deaw</h2>
      </footer>
    </>
  );
}
