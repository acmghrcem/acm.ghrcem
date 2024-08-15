import React from 'react';
import Image from 'next/image';
import logo from '@/public/acmlogo.svg'; 

const teamMembers = [
  { id: 1, name: 'Shubham Sahu', imageSrc: "/team/techteam/ShubhamSahu.jpg"},
  { id: 2, name: 'Harshwardhan Datar', imageSrc: '/team/techteam/Harshwardhan Datar_.png' },
  { id: 3, name: 'Krishna Galvali', imageSrc: '/team/techteam/krishna.jpg' },
  { id: 4, name: 'Raj Chintawar', imageSrc: '/team/techteam/Raj Chintawar.jpg' },
  { id: 5, name: 'Ameer Sheikh', imageSrc: '/team/techteam/Ameer Sheikh.jpg' },
  { id: 6, name: 'Aditya Kurhade', imageSrc: '/team/techteam/clfnp6.jpg' },
  { id: 7, name: 'Vigneya Bhatt', imageSrc: '/team/techteam/Vigneya Bhatt.jpg' },
 
];

const CoreTeam = () => {
  return (
    <section className="py-12 mb-10 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Technical Team</h2>
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

export default CoreTeam;
