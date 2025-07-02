import React from 'react';

const properties = [
  {
    id: 1,
    title: "Modern Family House",
    price: "$350,000",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    size: "2,500 sqft",
    beds: 4,
    baths: 3,
    views: 154
  },
  {
    id: 2,
    title: "Luxury Villa",
    price: "$980,000",
    location: "Beverly Hills, CA",
    image: "https://marbella1.es/cdn/shop/articles/what-luxury-villas-will-be-ready-in-2025.png?v=1734251278&width=1600",
    size: "4,200 sqft",
    beds: 6,
    baths: 5,
    views: 201
  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: "$220,000",
    location: "Asheville, NC",
    image: "https://www.shutterstock.com/image-photo/new-construction-luxury-home-exterior-600nw-2459904345.jpg",
    size: "1,400 sqft",
    beds: 3,
    baths: 2,
    views: 254
  }
];

const Properties = () => {
  return (
    <section id="properties" className="properties-section">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map((home) => (
          <div key={home.id} className="property-card">
            <img src={home.image} alt={home.title} />
            <div className="property-info">
              <h3>{home.title}</h3>
              <p>{home.location}</p>
              <p className="price">{home.price}</p>
              <p>{home.size} • {home.beds} Beds • {home.baths} Baths</p>
              <p className="views">👁️ {home.views} views</p>
              <div className="map-container" style={{ marginTop: '10px' }}>
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(home.location)}&output=embed`}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Map of ${home.location}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
