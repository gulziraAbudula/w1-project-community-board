import React from 'react';
import ResourceCard from './components/ResourceCard';
import './App.css'; // We'll add some styling here
function App() {
  const resources = [
    {
      id: 1,
      title: 'Nike Training Club - Free Workouts',
      type: 'Fitness App',
      description: 'Access hundreds of free workouts from strength training to yoga, designed by Nike Master Trainers.',
      link: 'https://www.nike.com/ntc-app',
      date: null,
    },
    {
      id: 2,
      title: 'Morning Yoga in Central Park',
      type: 'Community Event',
      description: 'Join our free outdoor yoga sessions every weekend. All skill levels welcome! Bring your own mat.',
      link: null,
      date: 'Every Saturday & Sunday, 8:00 AM',
    },
    {
      id: 3,
      title: 'MyFitnessPal - Nutrition Tracking',
      type: 'Health App',
      description: 'Track your daily nutrition, calories, and macros with the world\'s largest food database.',
      link: 'https://www.myfitnesspal.com',
      date: null,
    },
    {
      id: 4,
      title: 'Beginner\'s Running Workshop',
      type: 'Local Workshop',
      description: 'Learn proper running form, injury prevention, and training plans. Hosted by certified running coaches.',
      link: 'https://example.com/running-workshop',
      date: 'August 15, 2025',
    },
    {
      id: 5,
      title: 'Strava - Running & Cycling Community',
      type: 'Social Platform',
      description: 'Connect with local athletes, join challenges, and track your outdoor activities.',
      link: 'https://www.strava.com',
      date: 'Ongoing',
    },
    {
      id: 6,
      title: 'Meditation & Mindfulness Circle',
      type: 'Community Event',
      description: 'Weekly guided meditation sessions focusing on stress relief and mental wellness.',
      link: null,
      date: 'Every Thursday, 7:00 PM',
    }
  ];

  return (
    <div className="app-container">
      <h1>💪 Fitness & Wellness Community Board 💪</h1>
      <p className="board-description">
        Your hub for free workouts resources, local community events, and nutrition tracking apps!
      </p>
      <div className="resources-grid">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id} 
            title={resource.title}
            type={resource.type}
            description={resource.description}
            link={resource.link}
            date={resource.date}
          />
        ))}
      </div>
    </div>
  );
} 

export default App;
