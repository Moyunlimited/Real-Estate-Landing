import React from 'react';

const agents = [
  {
    id: 1,
    name: "Sarah Thompson",
    title: "Senior Agent",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "David Williams",
    title: "Property Specialist",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Luxury Consultant",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Agents = () => {
  return (
    <section id="agents" className="agents-section">
      <h2>Meet Our Agents</h2>
      <div className="agent-grid">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p>{agent.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;