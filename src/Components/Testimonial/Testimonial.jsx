import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
    const clients = [
      {
        img: profilePic1,
        review:
          "Working with [SATYAKAM] has been a truly rewarding experience.He is a highly skilled full-stack developer who consistently delivers outstanding results.He brings a unique combination of creativity, technical expertise, and problem-solving abilities to every project.",
      },
      {
        img: profilePic2,
        review:
          "SATYAKAM's front-end development skills are top-notch.He has a keen eye for design, creating visually appealing and user-friendly interfaces that enhance the overall user experience.His attention to detail and commitment to responsive design ensure that our web applications look and perform flawlessly on all devices..",
      },
      {
        img: profilePic3,
        review:
          "On the back-end, [SATYAKAM] is equally impressive. He demonstrates a deep understanding of server-side technologies and databases, optimizing performance and ensuring data integrity. He is a proactive troubleshooter, identifying and resolving issues quickly and efficiently..",
      },
      {
        img: profilePic4,
        review:
          "In addition to his technical powers, [SATYAKAM] is a reliable and dedicated professional. He consistently meets deadlines and goes the extra mile to ensure project success. His passion for staying up-to-date with the latest industry trends and technologies is evident, as he consistently seeks opportunities for professional growth.",
      },
    ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client always get </span>
        <span>Exceptional Work </span>
        <span>from me... </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/*slider*/}
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}      
      >
        {clients.map((client, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default Testimonials
