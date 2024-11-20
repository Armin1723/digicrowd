export const cursorFollower = (dets) => {
  const cursor = document.querySelector("#cursor");

  cursor.style.scale = 1;
  cursor.style.opacity = 1;
  cursor.style.top = dets.clientY - 350 + "px";
  cursor.style.left = dets.clientX - 10 + "px";
};

export const removeHover = () => {
  let cursor = document.querySelector("#cursor");
  cursor.style.opacity = 0;
  cursor.style.scale = 0;
};

export const cardsData = [
  {
    title: "Development",
    description:
      "Unlock progressive development services at Digicrowd. Our committed team shapes inventive solutions.",
    sub: [
      {
        title: "Web Design and Development",
        image: "home-icon-2-1",
      },
      {
        title: "Mobile App Development",
        image: "home-icon-2-2",
      },
      {
        title: "Software Development",
        image: "home-icon-2-3",
      },
      {
        title: "Blockchain Development",
        image: "home-icon-2-4",
      },
    ],
  },
  {
    title: "Design",
    description:
      "Experience incomparable design services with Digicrowd. Our team of experts crafts visually appealing solutions.",
    sub: [
      {
        title: "Logo Designing",
        image: "home-icon-4-1",
      },
      {
        title: "Packaging",
        image: "home-icon-4-2",
      },
      {
        title: "Graphic Design",
        image: "home-icon-4-3",
      },
    ],
  },
  {
    title: "IT Services",
    description:
      "Discover exceptional IT services at Digicrowd. Our skilled team provides innovative solutions.",
    sub: [
      {
        title: "IT Strategy & Consulting",
        image: "home-icon-1-1",
      },
      {
        title: "Cloud Computing.",
        image: "home-icon-1-2",
      },
      {
        title: "Cybersecurity Solutions",
        image: "home-icon-1-3",
      },
      {
        title: "Data Storage & Backup",
        image: "home-icon-1-4",
      },
      {
        title: "Infrastructure Performance",
        image: "home-icon-1-5",
      },
    ],
  },
  {
    title: "Marketing",
    description:
      "Boost your business with Digicrowd, the best SEO and digital marketing company. We offer top-notch tailored services.",
    sub: [
      {
        title: "SEO",
        image: "home-icon-3-1",
      },
      {
        title: "PPC",
        image: "home-icon-3-2",
      },
      {
        title: "Social Media Marketing",
        image: "home-icon-3-3",
      },
      {
        title: "Content Marketing",
        image: "home-icon-3-4",
      },
      {
        title: "Email Marketing",
        image: "home-icon-3-5",
      },
      {
        title: "Influencer Marketing",
        image: "home-icon-3-6",
      },
    ],
  }
];


export const cardsDataSmall = [
  {
    title: "Development",
    description:
      "Unlock progressive development services at Digicrowd. Our committed team shapes inventive solutions.",
    sub: [
      {
        title: "Web Design and Development",
        image: "home-icon-2-1",
      },
      {
        title: "Mobile App Development",
        image: "home-icon-2-2",
      },
      {
        title: "Software Development",
        image: "home-icon-2-3",
      },
      {
        title: "Blockchain Development",
        image: "home-icon-2-4",
      },
    ],
  },
  {
    title: "Design",
    description:
      "Experience incomparable design services with Digicrowd. Our team of experts crafts visually appealing solutions.",
    sub: [
      {
        title: "Logo Designing",
        image: "home-icon-4-1",
      },
      {
        title: "Packaging",
        image: "home-icon-4-2",
      },
      {
        title: "Graphic Design",
        image: "home-icon-4-3",
      },
    ],
  },
  {
    title: "Digital PR",
    description:
      "Get your brands in front of customers through media placements, brand mentions and links.",
  },
  {
    title: "Market Research",
    description:
      "Analyse consumer insights and market trends to uncover opportunities for strategic growth.",
  },
  {
    title: "IT Services",
    description:
      "Discover exceptional IT services at Digicrowd. Our skilled team provides innovative solutions.",
    sub: [
      {
        title: "IT Strategy & Consulting",
        image: "home-icon-1-1",
      },
      {
        title: "Cloud Computing Solutions",
        image: "home-icon-1-2",
      },
      {
        title: "Cybersecurity Solutions",
        image: "home-icon-1-3",
      },
      {
        title: "Data Storage & Backup",
        image: "home-icon-1-4",
      },
      {
        title: "Infrastructure Performance",
        image: "home-icon-1-5",
      },
    ],
  },
  {
    title: "Marketing",
    description:
      "Boost your business with Digicrowd, the best SEO and digital marketing company. We offer top-notch tailored services.",
    sub: [
      {
        title: "SEO",
        image: "home-icon-3-1",
      },
      {
        title: "PPC",
        image: "home-icon-3-2",
      },
      {
        title: "Social Media Marketing",
        image: "home-icon-3-3",
      },
      {
        title: "Content Marketing",
        image: "home-icon-3-4",
      },
      {
        title: "Email Marketing",
        image: "home-icon-3-5",
      },
      {
        title: "Influencer Marketing",
        image: "home-icon-3-6",
      },
    ],
  },
  {
    title: "Analysis",
    description:
      "Track and measure your marketing performance to make data-driven decisions.",
  },
  {
    title: "Strategy",
    description:
      "Develop a comprehensive marketing strategy to achieve your business goals.",
  },
];
