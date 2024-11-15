export const cursorFollower = (dets) => {
    const cursor = document.querySelector("#cursor");

    cursor.style.scale = 1
    cursor.style.opacity = 1
    cursor.style.top = (dets.clientY - 350) + 'px'
    cursor.style.left = (dets.clientX -10) + 'px'
}

export const removeHover =() =>{
    let cursor = document.querySelector('#cursor')
    cursor.style.opacity = 0
    cursor.style.scale = 0
}

export const cardsData = [
    {
      title: "IT Services",
      description:
        "Discover exceptional IT services at Digicrowd. Our skilled team provides innovative solutions, keeping your business at the forefront of the digital landscape. Elevate your IT experience with us today.",
      images: [
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
      title: "Development",
      description:
        "Unlock progressive development services at Digicrowd. Our committed team shapes inventive solutions, ensuring your projects flourish in the dynamic digital realm. Elevate your development journey with us today.",
      images: [
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
      title: "Marketing",
      description:
        "Boost your business with Digicrowd, the best SEO and digital marketing company. We offer top-notch tailored services and Enterprise digital marketing solutions to deliver results that will boost the online visibility of your brand.",
      images: [
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
      title: "Design",
      description:
        "Experience incomparable design services with Digicrowd, from alluring graphics to expert packaging, mesmerizing logo design, Product design consulting, and Product design and development services. Trust us with extensive services that leave a lasting impact on your business in the online realm.",
      images: [
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
  ];