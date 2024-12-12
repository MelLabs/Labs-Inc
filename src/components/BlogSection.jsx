import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  javaScript,
  rust,
  typeScript,
  html5,
  react,
  vue,
  css,
  sass,
  tailwindCSS,
  material,
  redux,
  svelte,
  nodeJS,
  express,
  graphQL,
  mongoDB,
  mysql,
  firebase,
  flutter,
  digitalocean,
  figma,
  googlecloud,
  reactnative,
  java,
  electron,
} from "../assets";

import React from 'react';
import { clients } from '../constants'

import styles, { layout } from '../style'

const BlogSection = () => {
  const blogItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5kcm9pZCUyRklPUyUyMERldmVsb3BtZW50fGVufDB8fDB8fHww",
      title: "Android/IOS Development",
      description: "We develop custom, high-performance mobile apps with a focus on intuitive user interfaces, smooth performance, and platform-specific features, ensuring a seamless experience on both Android and iOS devices.",
      tech: [
        {
          id: "WErfew",
          logo: reactnative
        },
        {
          id: "truyrth",
          logo: flutter
        },

        {
          id: "eosifhnw",
          logo: java
        },
      ]
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      title: "Web Development",
      description: "Our team builds responsive, secure, and scalable websites and web applications, using the latest technologies to provide dynamic user experiences and reliable functionality across all browsers and devices.",
      tech: [

        {
          id: "client-1",
          logo: javaScript,
        },
        {
          id: "client-3",
          logo: typeScript,
        },
        {
          id: "client-5",
          logo: react,
        },
        {
          id: "client-6",
          logo: html5,
        },
        {
          id: "client-7",
          logo: vue,
        },
        {
          id: "client-9",
          logo: svelte,
        },
        {
          id: "client-10",
          logo: tailwindCSS,
        },
        {
          id: "css",
          logo: css,
        },
        {
          id: "sass",
          logo: sass,
        }
      ]
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Desktop Application and SDKs",
      description: "We create powerful and efficient desktop applications tailored to your business needs, along with comprehensive SDKs to support developers in integrating and extending functionality seamlessly across platforms.",
      tech: [
        {
          id: "ewfew",
          logo: nodeJS
        }, 
        {
          id: "Wefwef",
          logo: electron
        },
        {
          id: "client-1",
          logo: javaScript,
        },
        {
          id: "client-3",
          logo: typeScript,
        },
        {
          id: "EWfewf",
          logo: java
        }

      ]
    }
  ];

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className={styles.heading2}>
          Software Corner
        </h1>
        <p className={`${styles.paragraph}  mt-5`}>
          Our freelance company offers services in Web & Software Development, including full-stack and mobile app creation. We provide Design & Creative solutions like graphic design and UI/UX. Our Writing & Translation team handles content creation and localization. We excel in Marketing & Social Media management and offer reliable Administrative Support, from virtual assistance to data management.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogItems.map((item, index) => (
            <BlogItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};




const BlogItem = ({ imageSrc, title, description, tech }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={imageSrc}
          alt={title}
        />
        {/* <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={authorImage}
            alt={authorName}
          />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">{authorName}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{authorRole}</p>
          </div>
        </div> */}
      </div>
      <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
      <hr className="w-32 my-6 text-blue-500" />
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <div className={`grid gap-3 grid-cols-10 my-3`}>
        {tech.map((client) => (
          // <div key={client.id} className={`flex-1 ${styles.flexStart} `}>
          <img
            src={client.logo}
            alt='client'
            className=''
          />
          // </div>
        ))}
      </div>
      {/* <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
        Read more
      </a> */}
    </div>
  );
};



export default BlogSection;
