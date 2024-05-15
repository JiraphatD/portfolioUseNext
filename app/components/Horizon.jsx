import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';


function ScrollSection() {
    const phone = useMediaQuery('(min-width:300px) and (max-width:1200px)');
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
        sectionRef.current,
        {
            translateX: 0,
        },
        {
            translateX: "-900vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "6000 top",
                scrub: 0.6,
                pin: true,
                snap: 1 / (contents.length - 1)
            },
        }
        );
        return () => {
        {/* A return function for killing the animation on component unmount */ }
        pin.kill();
        };
    }, []);

    const contents = [
        {
            image: '/photo/kmitl.png',
            title: 'Project : Floorplan and Room Usage Information Media',
            description: 'This is my year 4 final project using React, nodeJS and PostgreSQL. This project is about displaying and showing floor plans and information or activities in the KMITL building and letting students book rooms. In the admin zone , it can display room usage to analyze data.',
            link: 'https://kip.kmitl.ac.th/projects/clmd4mze100cvqntqzrwozkrx'
        },
        {
            image: '/photo/intern.png',
            title: 'Intern at Bangkok Web Solution Co.,Ltd. as a Back-End developer',
            description: 'I had the opportunity to intern at Bangkok Web Solution Co.,Ltd. as a back end developer.',
            link: 'https://drive.google.com/file/d/1V5kg8RF-59wfjCyEF6bsF577wZnq88BR/view?usp=sharing'
        },
        {
            image: '/photo/fast.png',
            title: 'Project Fast-8',
            description: 'this is education web site, by telling the story of the history of bus number 8.',
            link: 'https://fast-8.vercel.app/'
        },
        {
            image: '/photo/master.png',
            title: 'Project Master Call',
            description: 'This is a game multiplayer web site, which is an X/O game that has skills to make it more fun and challenging for the player.',
            link: 'https://mastercall-2029d.web.app/'
        },
        {
            image: '/photo/meb.png',
            title: 'Project MockUP : Meb market',
            description: 'This is a mockup project, a mockup meb market website for learn something about web layout and front-end function.',
            link: 'https://mebmarket-46c40.web.app/'
        },
        {
            image: '/photo/java.png',
            title: 'Project STORE MANAGEMENT SYSTEM',
            description: 'This is department store management system using Java language, which lets users add products and manage them.',
            link: 'https://github.com/JiraphatD/Java-storeManage'
        },
        {
            image: '/photo/card.png',
            title: 'Project CARD DETECTION AND COUNT',
            description: `This is a card detection and count project using YOLO v.5, which can detect and count cards. (the problem with incorrect detection numbers is how long it can be trained)`,
            link: 'https://drive.google.com/drive/folders/1tf5gKbJ0k9FNoI-hAXuPUeaBP1PEI_97?usp=sharing'
        },
        {
            image: '/photo/game.png',
            title: 'Project Vengeful Impact of the Dawn',
            description: `This is a game project using Unreal Engine 4.`,
            link: 'https://drive.google.com/drive/folders/132N3j9bWPmLQxXUU2qTwxvFP7e4m36JC?usp=sharing'
        },
        {
            image: '/photo/c.png',
            title: 'Project Department Store',
            description: `This is department store management system using the c language, which lets users add products and manage them.`,
            link: 'https://github.com/JiraphatD/compro-project'
        },
        {
            image: '/photo/old.png',
            title: 'MAYA old man and the sea',
            description: `This is a 3D animation project using Maya.`,
            link: 'https://www.youtube.com/watch?v=ZI353R1lp_E'
        },
    ]

    return (
        <>
            {phone ? (
                <>
                    {contents.map((content, index) => {
                        return(
                            <div className="" key={index}>
                                <div className="relative text-center mt-20 mx-10">
                                    <p>{content.title}</p>
                                    <div className="flex justify-center my-5">
                                        <Link href={content.link} target="_blank">
                                            <Image src={content.image} height={1000} width={1000} alt="" className="shadow-xl"/>
                                        </Link>
                                    </div>
                                    <p className="2xl:mx-40 sm:mx-20 2xl:text-base sm:text-sm">
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : (
                <section className="scroll-section-outer">
                    <div ref={triggerRef}>
                        <div ref={sectionRef} className="scroll-section-inner">
                            {contents.map((content, index) => {
                                return(
                                    <div className="scroll-section" key={index}>
                                        <div className="relative text-center">
                                            <p>{content.title}</p>
                                            <div className="flex justify-center my-5">
                                                <Link href={content.link} target="_blank">
                                                    <Image src={content.image} height={1000} width={1000} alt="" className="shadow-xl"/>
                                                </Link>
                                            </div>
                                            <p className="2xl:mx-40 sm:mx-20 2xl:text-base sm:text-sm">
                                                {content.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}
            
        </>
    );
}

export default ScrollSection;