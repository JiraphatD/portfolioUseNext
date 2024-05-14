import React from "react";
import Image from "next/image";
import profile from "../../public/photo/me.png"
import { Grid } from "@mui/material";

function My() {
    return (
        <>
            <Grid container className="bg-gray-950 pt-10">
                <Grid item lg={5} xs={12} className="h-screen relative">
                    <Image src={profile} width={800} alt="myProfile" className="-z-1 absolute " />
                    <div className="absolute" style={{fontSize: '4vw', fontWeight: '800', zIndex: 1, color: 'white', marginTop: '55%'}}>
                    <p className="mx-20">JIRAPHAT</p>
                    <p className="mx-40">WUNPUAN</p>
                    </div>
                </Grid>
                <Grid item lg={7} xs={12} className="px-3">
                    <p className="text-gray-50 text-7xl uppercase">
                        <span className="text-9xl">Hello</span>, I'm a person who is interested in web development and UI/UX design.
                    </p>
                    <p className="uppercase text-gray-50 text-xl mt-10">
                        Graduate from King Mongkut's Institute of Technology Ladkrabang
                        Bachelor of Science Program in Information Technology (Multimedia and Game Development)
                    </p>
                </Grid>
            </Grid>
            <div className="flex items-center justify-center h-screen">
                <p className="text-center uppercase">this is my work and experience</p>
            </div>
        </>
    );
}

export default My;