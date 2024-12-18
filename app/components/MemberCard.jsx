import React from "react";
import Link from "next/link";
import Image from "next/image";

const linkIcons = {
  github: "/github.svg",
  email: "/email.svg",
  twitter: "/twitter.svg",
  linkedin: "/linkedin.svg",
  behance: "/behance.svg",
  instagram: "/instagram.svg",
  website: "/website.svg",
  whatsapp: "/whatsapp.svg",
};

const MemberCard = ({ img, name, tag, isAdmin, links }) => {
  return (
    <div className="relative bg-white rounded-lg p-6 w-full h-32">
      {img && (
        <div className="absolute top-0 right-0 m-4 flex flex-col items-center">
          <Image
            src={img}
            alt={name}
            width={60}
            height={60}
            className="rounded-lg"
          />
          {isAdmin && (
            <p className="mt-[15px] text-[15px] font-extrabold text-blue-500 uppercase">
              ADMIN
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col absolute top-4">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">
          {name}
        </h3>
        <p className="text-gray-500">{tag}</p>
        <div className="flex gap-1.5 mt-5 text-[#3E85EF]">
          {links &&
            links.map((link, index) => (
              <Link key={index} href={link.url} target="_blank">
                <Image
                  src={linkIcons[link.type]}
                  width={20}
                  height={20}
                  alt={link.type}
                  className="text-[#3E85EF]"
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
