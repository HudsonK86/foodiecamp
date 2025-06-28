// Utility functions for dynamic content population
// These functions can be used to populate cuisine and event cards from a database

/**
 * Generate star rating HTML based on rating value
 * @param {number} rating - Rating value (0-5)
 * @returns {string} HTML string for star rating
 */
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let html = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    
    return html;
}

/**
 * Create a cuisine card element
 * @param {Object} cuisine - Cuisine data object
 * @returns {HTMLElement} Cuisine card element
 */
function createCuisineCard(cuisine) {
    const cardHTML = `
        <div class="cuisine-card bg-white rounded-xl shadow-lg card-hover transition-all duration-300" data-cuisine-id="${cuisine.id}">
            <img src="${cuisine.image}" alt="${cuisine.name} Cuisine" class="cuisine-image w-full h-48 object-cover rounded-t-xl">
            <div class="p-6">
                <h3 class="cuisine-name text-xl font-semibold text-gray-800 mb-2">${cuisine.name}</h3>
                <div class="flex items-center mb-4">
                    <div class="cuisine-rating flex text-yellow-400" data-rating="${cuisine.rating}">
                        ${generateStarRating(cuisine.rating)}
                    </div>
                    <span class="cuisine-rating-value ml-2 text-gray-600">${cuisine.rating}</span>
                </div>
                <a href="cuisine.html?id=${cuisine.id}" class="cuisine-link w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center">
                    Learn More
                </a>
            </div>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = cardHTML;
    return div.firstElementChild;
}

/**
 * Create an event card element
 * @param {Object} event - Event data object
 * @returns {HTMLElement} Event card element
 */
function createEventCard(event) {
    const cardHTML = `
        <div class="event-card bg-white rounded-xl shadow-lg card-hover transition-all duration-300" data-event-id="${event.id}">
            <img src="${event.image}" alt="${event.title}" class="event-image w-full h-40 object-cover rounded-t-xl">
            <div class="p-6">
                <h3 class="event-title text-xl font-semibold text-gray-800 mb-3">${event.title}</h3>
                <div class="event-details space-y-2 text-sm mb-4">
                    <p class="event-date text-gray-600">
                        <i class="fas fa-calendar mr-2 text-blue-600"></i>
                        <span class="date-value">${event.date}</span>
                    </p>
                    <p class="event-time text-gray-600">
                        <i class="fas fa-clock mr-2 text-blue-600"></i>
                        <span class="time-value">${event.time}</span>
                    </p>
                    <p class="event-chef text-gray-600">
                        <i class="fas fa-user mr-2 text-blue-600"></i>
                        <span class="chef-name">${event.chef}</span>
                    </p>
                    <p class="event-participants text-gray-600">
                        <i class="fas fa-users mr-2 text-blue-600"></i>
                        <span class="participant-count">${event.participants}</span> participants
                    </p>
                </div>
                <div class="event-actions">
                    <a href="events.html?id=${event.id}" class="event-link w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = cardHTML;
    return div.firstElementChild;
}

/**
 * Populate cuisine container with data
 * @param {Array} cuisines - Array of cuisine objects
 */
function populateCuisines(cuisines) {
    const container = document.getElementById('cuisine-container');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Add each cuisine card
    cuisines.forEach(cuisine => {
        const card = createCuisineCard(cuisine);
        container.appendChild(card);
    });
}

/**
 * Populate events container with data
 * @param {Array} events - Array of event objects
 */
function populateEvents(events) {
    const container = document.getElementById('events-container');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Add each event card
    events.forEach(event => {
        const card = createEventCard(event);
        container.appendChild(card);
    });
}

/**
 * Populate event details page with data
 * @param {Object} event - Event data object with detailed information
 */
function populateEventDetails(event) {
    // Basic event information
    const titleElement = document.getElementById('event-title');
    if (titleElement) titleElement.textContent = event.title;
    
    const descriptionElement = document.getElementById('event-description');
    if (descriptionElement) descriptionElement.textContent = event.description;
    
    const dateElement = document.getElementById('event-date');
    if (dateElement) dateElement.textContent = event.date;
    
    const timeElement = document.getElementById('event-time');
    if (timeElement) timeElement.textContent = event.time;
    
    const chefElement = document.getElementById('event-chef');
    if (chefElement) chefElement.textContent = event.chef;
    
    const participantsElement = document.getElementById('participant-count');
    if (participantsElement) participantsElement.textContent = event.participants;
    
    const locationElement = document.getElementById('event-location');
    if (locationElement) locationElement.textContent = event.location;
    
    const priceElement = document.getElementById('event-price');
    if (priceElement) priceElement.textContent = event.price;
    
    const spotsElement = document.getElementById('spots-remaining');
    if (spotsElement) spotsElement.textContent = event.spotsRemaining;
    
    // Event image
    const imageElement = document.getElementById('event-hero-image');
    if (imageElement) {
        imageElement.src = event.image;
        imageElement.alt = event.title;
    }
    
    // Breadcrumb
    const breadcrumbElement = document.getElementById('event-breadcrumb');
    if (breadcrumbElement) breadcrumbElement.textContent = event.title;
    
    // Page title
    document.title = `${event.title} - FoodieCamp`;
    
    // Chef information (if provided)
    if (event.chef_info) {
        const chefNameElement = document.getElementById('chef-name');
        if (chefNameElement) chefNameElement.textContent = event.chef_info.name;
        
        const chefTitleElement = document.getElementById('chef-title');
        if (chefTitleElement) chefTitleElement.textContent = event.chef_info.title;
        
        const chefBioElement = document.getElementById('chef-bio');
        if (chefBioElement) chefBioElement.textContent = event.chef_info.bio;
        
        const chefPhotoElement = document.getElementById('chef-photo');
        if (chefPhotoElement) chefPhotoElement.src = event.chef_info.photo;
        
        const chefExperienceElement = document.getElementById('chef-experience');
        if (chefExperienceElement) chefExperienceElement.textContent = event.chef_info.experience;
        
        const chefStudentsElement = document.getElementById('chef-students');
        if (chefStudentsElement) chefStudentsElement.textContent = event.chef_info.students;
        
        const chefRatingElement = document.getElementById('chef-rating');
        if (chefRatingElement) chefRatingElement.textContent = event.chef_info.rating;
    }
    
    // Learning objectives (if provided)
    if (event.learning_objectives) {
        const learningElement = document.getElementById('learning-objectives');
        if (learningElement) {
            learningElement.innerHTML = event.learning_objectives.map(objective => 
                `<li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                    ${objective}
                </li>`
            ).join('');
        }
    }
    
    // Included items (if provided)
    if (event.included_items) {
        const includedElement = document.getElementById('included-items');
        if (includedElement) {
            includedElement.innerHTML = event.included_items.map(item => 
                `<li class="flex items-start">
                    <i class="fas fa-${item.icon || 'check'} text-blue-600 mr-2 mt-1"></i>
                    ${item.text || item}
                </li>`
            ).join('');
        }
    }
    
    // Requirements (if provided)
    if (event.requirements) {
        const requirementsElement = document.getElementById('requirements');
        if (requirementsElement) {
            requirementsElement.innerHTML = event.requirements.map(requirement => 
                `<li class="flex items-start">
                    <i class="fas fa-${requirement.icon || 'info-circle'} text-orange-500 mr-2 mt-1"></i>
                    ${requirement.text || requirement}
                </li>`
            ).join('');
        }
    }
}

/**
 * Load similar events for the event details page
 * @param {Array} events - Array of similar event objects
 */
function loadSimilarEvents(events) {
    const container = document.getElementById('similar-events');
    if (!container) return;
    
    container.innerHTML = '';
    
    events.forEach(event => {
        const card = createEventCard(event);
        container.appendChild(card);
    });
}

/**
 * Sample event data structure for database integration
 * This shows the expected structure for detailed event information
 */
const sampleDetailedEvent = {
    id: 1,
    title: "Asian Fusion Workshop",
    description: "Join our expert chef for an immersive Asian Fusion cooking experience...",
    date: "Dec 15, 2024",
    time: "2:00 PM - 5:00 PM",
    chef: "Chef Maria Rodriguez",
    participants: 15,
    location: "FoodieCamp Kitchen Studio",
    price: "$85 per person",
    spotsRemaining: 5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    chef_info: {
        name: "Chef Maria Rodriguez",
        title: "Master Chef & Asian Cuisine Specialist",
        bio: "With over 15 years of experience in Asian cuisine...",
        photo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300&h=300&fit=crop&crop=face",
        experience: "15+",
        students: "500+",
        rating: "4.9"
    },
    learning_objectives: [
        "Traditional Asian cooking techniques",
        "Flavor balancing and seasoning",
        "Modern presentation techniques",
        "Knife skills and food preparation",
        "Recipe adaptations for home cooking"
    ],
    included_items: [
        { icon: "utensils", text: "All cooking equipment and ingredients" },
        { icon: "book", text: "Recipe booklet to take home" },
        { icon: "coffee", text: "Welcome drink and refreshments" },
        { icon: "camera", text: "Professional photos of your dishes" },
        { icon: "certificate", text: "Certificate of completion" }
    ],
    requirements: [
        { icon: "user-check", text: "No prior cooking experience required" },
        { icon: "tshirt", text: "Comfortable clothing recommended" },
        { icon: "hand-paper", text: "Closed-toe shoes required" },
        { icon: "clock", text: "Please arrive 15 minutes early" },
        { icon: "heart", text: "Passion for learning and food!" }
    ]
};

// Example usage with sample data:
/*
const sampleCuisines = [
    {
        id: 1,
        name: "Chinese",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1617093700631-8b3d9b4e5e6f?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        name: "Malay",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d17a?w=400&h=250&fit=crop"
    }
];

const sampleEvents = [
    {
        id: 1,
        title: "Asian Fusion Workshop",
        date: "Dec 15, 2024",
        time: "2:00 PM - 5:00 PM",
        chef: "Chef Maria Rodriguez",
        participants: 15,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop"
    }
];

// To use these functions:
// populateCuisines(sampleCuisines);
// populateEvents(sampleEvents);
*/