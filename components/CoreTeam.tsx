import React from 'react';
import Image from 'next/image';
import logo from '@/public/acmlogo.svg'; 

const teamMembers = [
  { id: 1, name: 'AbuZaid', imageSrc: "/team/coreteam/AbuZaid.jpg"},
  { id: 2, name: 'Teshseen Shaikh', imageSrc: '/team/coreteam/Tehseen.jpg' },
  { id: 3, name: 'Tejas Musale', imageSrc: '/team/coreteam/Tejas Musale.jpg' },
  { id: 4, name: 'Tanushree Yaltiwar', imageSrc: '/team/coreteam/Tanushree Yaltiwar.jpg' },
  { id: 5, name: 'PriyalMandloie ', imageSrc: '/team/coreteam/Priyal_page-0001.jpg' },
  { id: 6, name: 'Rohit Gele', imageSrc: '/team/coreteam/20240308_101839-removebg.png' },
  {id:7,name:'Riya Anjikar',imageSrc:'/team/coreteam/Riya Anjikar_page-0001.jpg'}
];

const CoreTeam = () => {
  return (
    <section className="py-12 mb-10 bg-black-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-48 h-48 mx-auto">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={252}
                  height={252}
                  className="object-fill mx-auto rounded-lg"
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
