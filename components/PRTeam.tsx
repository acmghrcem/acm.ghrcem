import React from 'react';
import Image from 'next/image';
import logo from '@/public/acmlogo.svg'; 

const teamMembers = [
  { id: 1, name: 'Tejashvi Tiwari', imageSrc: "/team/prteam/Tejashvi Tiwari_.jpg"},
  { id: 2, name: 'Aditya Patil', imageSrc: '/team/prteam/IMG_20231104_213425_972.jpg' },
  { id: 3, name: 'Armaan Suri', imageSrc: '/team/prteam/Armaan Suri.jpg' },
  { id: 4, name: 'Damini Ahire', imageSrc: '/team/prteam/Damini Ahire.jpg' },
  { id: 5, name: 'Shardul Nikat', imageSrc: '/team/prteam/Shardul Nikat.jpg' },
  { id: 6, name: 'Vaishnavi Gaikwad', imageSrc: '/team/prteam/Vaishnavi Vikas Gaikwad_.jpg' },
  { id: 7, name: 'Luckyraj Yemul', imageSrc: '/team/prteam/Luckyraj Yemul_.jpg' },
  { id: 8, name: 'Devyani Daphal', imageSrc: '/team/prteam/Devyani Daphal_.jpg' },

 
];

const PRTeam = () => {
  return (
    <section className="py-12 mb-10 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Public Relation Team</h2>
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

export default PRTeam;
