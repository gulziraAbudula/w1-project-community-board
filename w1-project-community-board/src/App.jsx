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
    },
    {
      id: 7,
      title: 'Couch to 5K Training Program',
      type: 'Training Program',
      description: '9-week running program designed to get beginners from couch to running a 5K race.',
      link: 'https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/',
      date: 'Self-paced',
    },
    {
      id: 8,
      title: 'Nutrition Workshop: Meal Prep Basics',
      type: 'Workshop',
      description: 'Learn how to prepare healthy meals for the week. Includes recipe booklet and containers!',
      link: 'https://example.com/meal-prep-workshop',
      date: 'August 15, 2025',
    },
    {
      id: 9,
      title: 'Fitness Buddy Matching',
      type: 'Community Service',
      description: 'Get paired with a local workout partner who shares your fitness goals and schedule.',
      link: null,
      date: 'Ongoing signups',
    },
    {
      id: 10,
      title: 'MyFitnessPal - Calorie Tracking',
      type: 'Mobile App',
      description: 'Track your daily nutrition and exercise with this comprehensive fitness app.',
      link: 'https://www.myfitnesspal.com/',
      date: null,
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
