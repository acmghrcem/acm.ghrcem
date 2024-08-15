import React from 'react';
import Image from 'next/image';
import logo from '@/public/acmlogo.svg'; 

const teamMembers = [
  { id: 1, name: 'Rohit Gele', imageSrc: "/team/designteam/20240308_101839-removebg.png"},
  { id: 2, name: 'Shubham Singh', imageSrc: '/team/designteam/Photo on 18-06-24 at 11.24 AM.jpg' },
  { id: 3, name: 'Samyak Dekate', imageSrc: '/team/designteam/20240807_200356.jpg' },
  { id: 4, name: 'Naman Kadam', imageSrc: '/team/designteam/IMG_20230207_153315_567.jpg' },
];

const DesignTeam = () => {
  return (
    <section className="py-12 mb-10 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Design Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-48 h-48 mx-auto">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={252}
                  height={352}
                  className="object-cover mx-auto rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignTeam;
