import React, { useState } from 'react';
// import '../index.css'; // 


const StoriesSection = () => {
  // Sample stories data - replace with your actual data
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "Wedding Bliss",
      image: "BG",
      date: "June 15, 2023",
      description: "A beautiful outdoor wedding with 200 guests under the stars."
    },
    {
      id: 2,
      title: "Corporate Retreat",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
      date: "May 5, 2023",
      description: "Team building activities in a mountain resort for 50 employees."
    },
    {
      id: 3,
      title: "Birthday Bash",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      date: "April 22, 2023",
      description: "Surprise 40th birthday party with a 80s theme."
    },
    {
      id: 4,
      title: "Charity Gala",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      date: "March 10, 2023",
      description: "Annual fundraiser that raised $250,000 for local children's hospital."
    }
  ]);

  const [selectedStory, setSelectedStory] = useState(null);

  const openStory = (story) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <section className="stories-section">
      <div className="container">
        <h2 className="section-title">Our Event Stories</h2>
        <p className="section-subtitle">See how we've helped create memorable experiences</p>
        
        <div className="stories-grid">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="story-card"
              onClick={() => openStory(story)}
            >
              <div className="story-image-container">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="story-image"
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="story-info">
                <h3>{story.title}</h3>
                <p className="story-date">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="story-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeStory}>
              &times;
            </button>
            <img 
              src={selectedStory.image} 
              alt={selectedStory.title} 
              className="modal-image"
            />
            <div className="modal-text">
              <h2>{selectedStory.title}</h2>
              <p className="modal-date">{selectedStory.date}</p>
              <p className="modal-description">{selectedStory.description}</p>
              <button className="cta-button">Plan Your Event</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoriesSection;