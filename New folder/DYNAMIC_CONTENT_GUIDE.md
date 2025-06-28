# Dynamic Content Structure Documentation

This document explains the standardized HTML structure for cuisine and event cards in the FoodieCamp website, designed for easy database integration.

## Cuisine Cards Structure

### HTML Template
```html
<div class="cuisine-card bg-white rounded-xl shadow-lg card-hover transition-all duration-300" data-cuisine-id="{id}">
    <img src="{image_url}" alt="{name} Cuisine" class="cuisine-image w-full h-48 object-cover rounded-t-xl">
    <div class="p-6">
        <h3 class="cuisine-name text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div class="flex items-center mb-4">
            <div class="cuisine-rating flex text-yellow-400" data-rating="{rating}">
                <!-- Dynamic star icons based on rating -->
            </div>
            <span class="cuisine-rating-value ml-2 text-gray-600">{rating}</span>
        </div>
        <a href="cuisine.html?id={id}" class="cuisine-link w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center">
            Learn More
        </a>
    </div>
</div>
```

### Data Structure Expected
```javascript
{
    id: number,           // Unique identifier
    name: string,         // Cuisine name (e.g., "Chinese", "Malay")
    rating: number,       // Rating from 0-5 (supports decimals)
    image: string         // Image URL
}
```

### Key Classes for Styling/Selection
- `.cuisine-card` - Main container
- `.cuisine-image` - Image element
- `.cuisine-name` - Cuisine name
- `.cuisine-rating` - Star rating container
- `.cuisine-rating-value` - Numeric rating display
- `.cuisine-link` - Learn more button

## Event Cards Structure

### HTML Template
```html
<div class="event-card bg-white rounded-xl shadow-lg card-hover transition-all duration-300" data-event-id="{id}">
    <img src="{image_url}" alt="{title}" class="event-image w-full h-40 object-cover rounded-t-xl">
    <div class="p-6">
        <h3 class="event-title text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <div class="event-details space-y-2 text-sm mb-4">
            <p class="event-date text-gray-600">
                <i class="fas fa-calendar mr-2 text-blue-600"></i>
                <span class="date-value">{date}</span>
            </p>
            <p class="event-time text-gray-600">
                <i class="fas fa-clock mr-2 text-blue-600"></i>
                <span class="time-value">{time}</span>
            </p>
            <p class="event-chef text-gray-600">
                <i class="fas fa-user mr-2 text-blue-600"></i>
                <span class="chef-name">{chef}</span>
            </p>
            <p class="event-participants text-gray-600">
                <i class="fas fa-users mr-2 text-blue-600"></i>
                <span class="participant-count">{participants}</span> participants
            </p>
        </div>
        <div class="event-actions">
            <a href="events.html?id={id}" class="event-link w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center">
                Learn More
            </a>
        </div>
    </div>
</div>
```

### Data Structure Expected
```javascript
{
    id: number,           // Unique identifier
    title: string,        // Event title
    date: string,         // Event date (formatted string)
    time: string,         // Event time range
    chef: string,         // Chef name
    participants: number, // Number of participants
    image: string         // Image URL
}
```

### Key Classes for Styling/Selection
- `.event-card` - Main container
- `.event-image` - Image element
- `.event-title` - Event title
- `.event-details` - Details container
- `.event-date`, `.date-value` - Date information
- `.event-time`, `.time-value` - Time information
- `.event-chef`, `.chef-name` - Chef information
- `.event-participants`, `.participant-count` - Participant information
- `.event-actions` - Action buttons container
- `.event-link` - Learn more button

## Recipe Cards Structure

### HTML Template
```html
<div class="recipe-card bg-white rounded-xl shadow-lg card-hover transition-all duration-300" data-recipe-id="{id}" data-status="{status}">
    <img src="{image_url}" alt="{title}" class="recipe-image w-full h-48 object-cover rounded-t-xl">
    <div class="p-6">
        <h3 class="recipe-title text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p class="recipe-description text-gray-600 mb-4">{description}</p>
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
                <i class="fas fa-clock text-gray-500 mr-2"></i>
                <span class="recipe-time text-sm text-gray-600">{prep_time} + {cook_time}</span>
            </div>
            <div class="flex items-center">
                <div class="recipe-rating flex text-yellow-400" data-rating="{rating}">
                    <!-- Dynamic star icons based on rating -->
                </div>
                <span class="recipe-rating-value ml-2 text-gray-600 text-sm">{rating} ({review_count} reviews)</span>
            </div>
        </div>
        <div class="recipe-actions flex space-x-2">
            <!-- Dynamic action buttons based on status and user role -->
        </div>
    </div>
</div>
```

### Data Structure Expected
```javascript
{
    id: number,              // Unique identifier
    title: string,           // Recipe title
    description: string,     // Short description
    prep_time: string,       // Preparation time (e.g., "15 mins")
    cook_time: string,       // Cooking time (e.g., "30 mins")
    rating: number,          // Average rating from 0-5
    review_count: number,    // Number of reviews
    image: string,          // Image URL
    status: string,         // "approved", "pending", "rejected", "private"
    author: string,         // Recipe author name
    cuisine: string         // Cuisine type
}
```

### Key Classes for Recipe Cards
- `.recipe-card` - Main container
- `.recipe-image` - Image element
- `.recipe-title` - Recipe title
- `.recipe-description` - Short description
- `.recipe-time` - Time information
- `.recipe-rating` - Star rating container
- `.recipe-rating-value` - Numeric rating with review count
- `.recipe-actions` - Action buttons container

## Review Cards Structure

### HTML Template
```html
<div class="review-card bg-white rounded-xl shadow-lg p-6" data-review-id="{id}" data-status="{status}" data-rating="{rating}" data-recipe="{recipe_slug}">
    <div class="flex items-start justify-between mb-4">
        <div class="flex items-center">
            <img src="{user_image}" alt="{user_name}" class="w-12 h-12 rounded-full mr-4">
            <div>
                <h3 class="review-user-name font-semibold text-gray-800">{user_name}</h3>
                <p class="review-date text-sm text-gray-600">{date}</p>
            </div>
        </div>
        <div class="flex items-center">
            <span class="review-status bg-{status_color}-100 text-{status_color}-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>
            <div class="review-rating flex text-yellow-400 ml-2" data-rating="{rating}">
                <!-- Dynamic star icons based on rating -->
            </div>
        </div>
    </div>
    
    <div class="mb-4">
        <p class="review-recipe text-sm text-gray-600 mb-2">Recipe: <span class="font-medium text-blue-600">{recipe_name}</span></p>
        <p class="review-content text-gray-700">{content}</p>
    </div>
    
    <div class="review-actions flex space-x-2">
        <!-- Dynamic action buttons based on status -->
    </div>
</div>
```

### Data Structure Expected
```javascript
{
    id: number,              // Unique identifier
    user_name: string,       // Reviewer name
    user_image: string,      // Reviewer profile image URL
    date: string,           // Review date (e.g., "2 days ago")
    rating: number,         // Rating from 1-5
    recipe_name: string,    // Associated recipe name
    recipe_slug: string,    // Recipe identifier slug
    content: string,        // Review text content
    status: string          // "visible" or "hidden"
}
```

### Key Classes for Review Cards
- `.review-card` - Main container
- `.review-user-name` - Reviewer name
- `.review-date` - Review date
- `.review-status` - Status badge
- `.review-rating` - Star rating container
- `.review-recipe` - Associated recipe info
- `.review-content` - Review text
- `.review-actions` - Action buttons container

## Container IDs

- `#cuisine-container` - Container for all cuisine cards
- `#events-container` - Container for all event cards
- `#recipes-grid` - Container for recipe cards in admin pages
- `#reviews-grid` - Container for review cards in admin pages
- `#admin-recipes-section` - Admin recipe management section
- `#user-recipes-section` - User recipe management section

## JavaScript Functions Available

The `scripts.js` file includes utility functions for dynamic content:

- `generateStarRating(rating)` - Generates star rating HTML
- `createCuisineCard(cuisine)` - Creates a cuisine card element
- `createEventCard(event)` - Creates an event card element
- `populateCuisines(cuisines)` - Populates cuisine container with data
- `populateEvents(events)` - Populates events container with data

## Usage Examples

### Fetching and Displaying Data
```javascript
// Example: Fetch cuisines from API and display
fetch('/api/cuisines')
    .then(response => response.json())
    .then(cuisines => populateCuisines(cuisines));

// Example: Fetch events from API and display
fetch('/api/events')
    .then(response => response.json())
    .then(events => populateEvents(events));
```

### Manual Data Population
```javascript
const cuisines = [
    {
        id: 1,
        name: "Italian",
        rating: 4.7,
        image: "path/to/italian-cuisine.jpg"
    }
];

populateCuisines(cuisines);
```

## Benefits of This Structure

1. **Consistent Layout** - All cards follow the same structure
2. **Easy Database Integration** - Clear data structure requirements
3. **SEO Friendly** - Proper semantic HTML with meaningful classes
4. **Accessibility** - Proper alt texts and semantic structure
5. **Maintainable** - Centralized styling and behavior
6. **Scalable** - Easy to add new cards programmatically
7. **Responsive** - Works well with Tailwind CSS grid system

## File Organization

- `html/index.html` - Contains the standardized card structures
- `script/scripts.js` - Contains utility functions for dynamic content
- `css/styles.css` - Contains shared styling (imported in HTML files)

## Admin Page Features

### Admin Cuisine Management (`admin-cuisine.html`)
- Create/Edit cuisine modal with image upload
- Visibility toggle (Public/Private)
- Search and filtering functionality
- Pagination support
- Image preview with 400x300px recommended size

### Admin Recipe Management (`admin-recipe.html`)
- Two-section view: Admin Recipe and User Recipe
- Status-based filtering (All, Approved, Pending, Rejected, Private)
- Search functionality
- Dynamic action buttons based on recipe status:
  - **Pending**: View, Approve, Reject
  - **Approved**: View, Public/Private, Delete
  - **Rejected**: View, Awaiting Changes, Delete
  - **Private**: View, Make Public, Delete
- Rejection reason modal

### Admin Event Management (`admin-event.html`)
- Two-section view: Admin Events and User Events
- Status-based filtering (All, Pending, Approved, Rejected, Cancelled, Completed)
- Event type filtering (Cooking Class, Food Festival, Workshop, Competition, Tasting, Community Meetup)
- Date range filtering (All, Upcoming, This Week, This Month, Past Events)
- Search functionality
- Dynamic action buttons based on event status:
  - **Pending**: View, Approve, Reject, Request Changes
  - **Approved**: View, Edit, Public/Private
  - **Rejected**: View, Delete
  - **Cancelled**: View, Reactivate, Delete
  - **Completed**: View, Archive
- Rejection reason modal with quick select options

### Admin Review Management (`admin-review.html`)
- Review filtering by status, rating, and recipe
- Search functionality
- View/Hide toggle for review visibility
- Detailed review modal with full content
- Status indicators (Visible/Hidden)

## Admin JavaScript Functions

Additional functions available in admin pages:

### Cuisine Management
- `createCuisine()` - Opens create cuisine modal
- `editCuisine(id)` - Opens edit cuisine modal with existing data
- `toggleCuisineVisibility(id, status)` - Toggles public/private status
- `previewImage(input)` - Shows image preview in modal

### Recipe Management
- `approveRecipe(id)` - Approves a pending recipe
- `rejectRecipe(id)` - Opens rejection modal
- `submitRejection()` - Submits rejection with reason
- `toggleRecipeVisibility(id, status)` - Toggles public/private status
- `deleteRecipe(id)` - Deletes recipe with confirmation

### Event Management
- `approveEvent(id)` - Approves a pending event
- `rejectEvent(id)` - Opens rejection modal for events
- `requestChanges(id)` - Requests changes for events
- `deleteEvent(id)` - Deletes event with confirmation
- `toggleEventVisibility(id, status)` - Toggles public/private status
- `reactivateEvent(id)` - Reactivates cancelled events
- `archiveEvent(id)` - Archives completed events
- `closeRejectModal()` - Closes event rejection modal

### Review Management
- `viewReview(id)` - Opens detailed review modal
- `toggleReviewVisibility(id, status)` - Shows/hides review
- `filterReviews()` - Applies search and filter criteria
- `closeReviewModal()` - Closes review detail modal
