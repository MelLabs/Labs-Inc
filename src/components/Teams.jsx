import React from 'react';
import { profile } from '../assets';
import styles from '../style';

const SocialIcon = ({ href, label, iconPath }) => (
    <a
        href={href}
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label={label}
    >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={iconPath}></path>
        </svg>
    </a>
);

// ProfileCard Component
const ProfileCard = ({ imageUrl, name, title, socialLinks }) => (
    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
        {imageUrl !== "" ? (
            <img className="object-cover w-full rounded-xl aspect-square" src={imageUrl} alt={name} />
        ) : (
            <div></div>
        )}
        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>
        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{title}</p>
        <div className="flex mt-3 -mx-2">
            {socialLinks.map(({ href, label, iconPath }) => (
                <SocialIcon key={label} href={href} label={label} iconPath={iconPath} />
            ))}
        </div>
    </div>
);


const TeamSection = () => {
    const profiles = [
        {
            imageUrl: "",
            name: "",
            title: "",
            socialLinks: [
                // { href: "#", label: "Reddit", iconPath: "M12 22C6.47715 22 2 17.5228..." },
                // { href: "#", label: "Facebook", iconPath: "M2.00195 12.002C2.00312 16.9214..." },
                // { href: "#", label: "Github", iconPath: "M12.026 2C7.13295 1.99937..." },
            ]
        },
        {
            imageUrl: profile,
            name: "Saransh Dugar",
            title: "Enterprenuer",
            socialLinks: [
                { href: "#", label: "Reddit", iconPath: "M12 22C6.47715 22 2 17.5228..." },
                { href: "#", label: "Facebook", iconPath: "M2.00195 12.002C2.00312 16.9214..." },
                { href: "#", label: "Github", iconPath: "M12.026 2C7.13295 1.99937..." },
            ]
        },
        {
            imageUrl: "",
            name: "",
            title: "",
            socialLinks: [
                // { href: "#", label: "Reddit", iconPath: "M12 22C6.47715 22 2 17.5228..." },
                // { href: "#", label: "Facebook", iconPath: "M2.00195 12.002C2.00312 16.9214..." },
                // { href: "#", label: "Github", iconPath: "M12.026 2C7.13295 1.99937..." },
            ]
        },
    ];
    return (
        <section className="">
            <div className="h-[32rem] ">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className={styles.heading2}>
                        The Team
                    </h1>
                    {/* <div className="flex  mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
                    </div> */}
                    <p className={styles.paragraph}>
                    I’m passionate about delivering top-quality services that make a real difference for our clients. 
                    I believe in the power of collaboration, creativity, and innovation, and 
                    I strive to create a team environment where these values shine through every project 
                    we take on. 
                    </p>
                </div>
            </div>
            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">

                    {profiles.map((profile) => (
                        <ProfileCard
                            key={profile.name}
                            imageUrl={profile.imageUrl}
                            name={profile.name}
                            title={profile.title}
                            socialLinks={profile.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
};

export default TeamSection;
