import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import Header from './components/Header';
import PropertyList from './pages/PropertyList';
import PropertyForm from './components/PropertyForm';
import PropertyModal from './components/PropertyModal';

function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PropertyList />} />
              <Route path="/add" element={<PropertyForm />} />
            </Routes>
          </main>
          <PropertyModal />
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
