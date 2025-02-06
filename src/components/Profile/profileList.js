import React from 'react'
import profile from './profile';
const users = [
    {
      id: 1,
      name: "Alice Johnson",
      about: "Software Engineer passionate about AI and Web Development.",
      strengths: ["JavaScript", "React", "Machine Learning"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      about: "Full-stack developer specializing in backend technologies.",
      strengths: ["Node.js", "MongoDB", "GraphQL"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      about: "UI/UX Designer with a passion for user-friendly designs.",
      strengths: ["Figma", "Adobe XD", "CSS Animations"],
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      id: 4,
      name: "Diana Green",
      about: "Cybersecurity expert with experience in ethical hacking.",
      strengths: ["Penetration Testing", "Network Security", "Python"],
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Ethan Wright",
      about: "Mobile app developer specializing in cross-platform apps.",
      strengths: ["Flutter", "React Native", "Dart"],
      image: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    {
      id: 6,
      name: "Fiona Adams",
      about: "Data scientist passionate about AI and big data analytics.",
      strengths: ["Python", "TensorFlow", "Data Visualization"],
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 7,
      name: "George White",
      about: "DevOps engineer focusing on automation and cloud solutions.",
      strengths: ["AWS", "Docker", "Kubernetes"],
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 8,
      name: "Hannah Scott",
      about: "Product manager with a passion for building user-centric applications.",
      strengths: ["Agile Methodologies", "Project Management", "User Research"],
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    }
  ];
  
function profileList() {
  return (
    <div className='container'>
      <profile user={ users}/>
    </div>
  )
}

export default profileList
