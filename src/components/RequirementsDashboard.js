import React, { useState } from 'react';
import './RequirementsDashboard.css';

// Data for the requirements
const requirementsData = {
  userRequirements: {
    title: "User Requirements",
    sections: [
      {
        title: "Target Users",
        items: [
          { title: "Casual Gardeners", description: "Weekend gardeners with limited knowledge, small gardens or indoor plants, looking for simple guidance" },
          { title: "Serious Hobbyists", description: "Dedicated gardeners with established gardens, interested in optimizing yields and tracking detailed information" },
          { title: "Professionals", description: "Landscape designers, urban farmers, or small-scale producers needing comprehensive planning tools" }
        ]
      },
      {
        title: "Primary Use Cases",
        items: [
          { title: "Garden Planning", description: "Design garden layouts, select plants based on conditions" },
          { title: "Plant Care Tracking", description: "Log watering, fertilizing, and maintenance activities" },
          { title: "Growth Monitoring", description: "Record plant progress, harvest data, and success metrics" },
          { title: "Seasonal Guidance", description: "Receive timely advice based on location and season" }
        ]
      },
      {
        title: "Feature Priority",
        items: [
          { title: "Must-Have", description: "User profiles, plant database, garden layout tool, planting calendar, task reminders, basic tracking" },
          { title: "Nice-to-Have", description: "Weather integration, photo tracking, companion planting, pest identification, harvest statistics, community features" }
        ]
      }
    ]
  },
  dataRequirements: {
    title: "Data Requirements",
    sections: [
      {
        title: "Plant Database Schema",
        items: [
          { title: "Basic Information", description: "Name, type, description, images, growth habit" },
          { title: "Growth Requirements", description: "Sunlight, water, soil, temperature, fertilizer needs" },
          { title: "Planting Information", description: "Depth, spacing, germination, days to maturity, seasonal windows" },
          { title: "Maintenance", description: "Pruning, pests/diseases, companion plants, harvesting techniques" }
        ]
      },
      {
        title: "Garden Structure",
        items: [
          { title: "Physical Properties", description: "Dimensions, shape, type (raised/in-ground), materials" },
          { title: "Environmental Factors", description: "Orientation, sunlight exposure, irrigation method" },
          { title: "Soil Information", description: "Composition, amendments, pH, drainage, mulch" }
        ]
      },
      {
        title: "Tracking Metrics",
        items: [
          { title: "Planting Records", description: "Dates, sources, germination rates, transplanting" },
          { title: "Growth Milestones", description: "Development stages, flowering, fruiting, measurements" },
          { title: "Maintenance Records", description: "Watering, fertilizing, pruning, pest management" },
          { title: "Harvest Data", description: "Dates, yields, quality, seed saving" }
        ]
      }
    ]
  },
  technicalRequirements: {
    title: "Technical Requirements",
    sections: [
      {
        title: "Platform Approach",
        items: [
          { title: "Web-First, Responsive", description: "Accessible across devices with optimized experience for each screen size" },
          { title: "Progressive Web App", description: "For offline capabilities and mobile-like experience" }
        ]
      },
      {
        title: "API Requirements",
        items: [
          { title: "Weather APIs", description: "Integration with weather services for forecasts and historical data" },
          { title: "Plant Database APIs", description: "External plant data sources for comprehensive information" },
          { title: "Geolocation Services", description: "Hardiness zone determination, sun exposure calculations" }
        ]
      },
      {
        title: "Photo Capabilities",
        items: [
          { title: "Storage", description: "Secure cloud storage with compression and metadata preservation" },
          { title: "Analysis", description: "Image tagging, potential for plant/disease identification" }
        ]
      },
      {
        title: "Offline Functionality",
        items: [
          { title: "Essential Features", description: "Viewing plans, recording activities, taking photos, accessing guides" },
          { title: "Implementation", description: "PWA with service workers, local caching, offline-first architecture" }
        ]
      }
    ]
  }
};

const RequirementsDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('userRequirements');
  const [expandedSections, setExpandedSections] = useState({});

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Reset expanded sections when changing categories
    setExpandedSections({});
  };

  const toggleSection = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const renderRequirementItems = (items) => {
    return items.map((item, index) => (
      <div className="requirement-item" key={index}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    ));
  };

  const renderSections = (sections) => {
    return sections.map((section, index) => (
      <div className="requirement-section" key={index}>
        <div 
          className="section-header" 
          onClick={() => toggleSection(section.title)}
        >
          <h3>{section.title}</h3>
          <span className={`expand-icon ${expandedSections[section.title] ? 'expanded' : ''}`}>
            {expandedSections[section.title] ? '−' : '+'}
          </span>
        </div>
        {expandedSections[section.title] && (
          <div className="section-content">
            {renderRequirementItems(section.items)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="requirements-dashboard">
      <h1>Garden App Requirements</h1>
      <p className="dashboard-description">
        Phase 1: Planning & Requirements Documentation
      </p>
      
      <div className="category-tabs">
        {Object.keys(requirementsData).map(category => (
          <button 
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {requirementsData[category].title}
          </button>
        ))}
      </div>
      
      <div className="requirements-content">
        <h2>{requirementsData[activeCategory].title}</h2>
        {renderSections(requirementsData[activeCategory].sections)}
      </div>
    </div>
  );
};

export default RequirementsDashboard;