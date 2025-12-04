const quotes = [
    { text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },
    { text: "If there is no struggle, there is no progress.", author: "Frederick Douglass" },
    { text: "I had to make my own living and my own opportunity. But I made it! Don’t sit down and wait for the opportunities to come. Get up and make them.", author: "Madam C.J. Walker" },
    { text: "We all have dreams. In order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.", author: "Jesse Owens" }
];

const businesses = [
    {
        id: 1,
        name: "Detroit Soul Kitchen",
        category: "Food & Drink",
        description: "Authentic soul food made with love and family recipes passed down for generations.",
        tier: "surge", // $150 tier
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Motor City Cuts",
        category: "Services",
        description: "Premium grooming services for the modern gentleman.",
        tier: "growth", // $50 tier
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: []
    },
    {
        id: 3,
        name: "Urban Roots Garden",
        category: "Retail",
        description: "Community garden supply and organic produce market.",
        tier: "surge",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Legacy Books",
        category: "Retail",
        description: "Curated collection of African American literature and history.",
        tier: "starter", // $5 tier
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: []
    },
    {
        id: 5,
        name: "Tech Forward",
        category: "Services",
        description: "IT consulting and web development for small businesses.",
        tier: "surge",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: []
    }
];

const b2bData = {
    requests: [
        { id: 1, title: "Need graphic designer for event flyer", business: "Detroit Soul Kitchen" },
        { id: 2, title: "Looking for local produce supplier", business: "Urban Roots Garden" }
    ],
    offers: [
        { id: 1, title: "Offering free IT audit for non-profits", business: "Tech Forward" },
        { id: 2, title: "Barter: Catering for Web Design", business: "Detroit Soul Kitchen" }
    ]
};

const events = [
    {
        id: 1,
        title: "Detroit Cultural Festival",
        date: "Aug 15",
        location: "Hart Plaza",
        description: "A celebration of music, art, and food from all cultures in our city.",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Black Business Expo",
        date: "Sep 02",
        location: "Eastern Market",
        description: "Networking and showcase for local entrepreneurs.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Unity Jazz Night",
        date: "Sep 10",
        location: "Baker's Keyboard Lounge",
        description: "An evening of smooth jazz bringing the community together.",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];
