import React from 'react';

const PrayerTimes = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundColor: '#f7fafc',
        backgroundImage: "url('https://images.unsplash.com/photo-1604420459383-7459178c1875?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
          
          :root {
            --primary-green: #38e07b;
            --soft-green: #eaf7f0;
            --text-primary: #1a202c;
            --text-secondary: #4a5568;
            --border-color: #e2e8f0;
            --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --card-shadow-hover: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
          
          .prayer-card {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: var(--card-shadow);
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-left: 5px solid transparent;
          }
          
          .prayer-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--card-shadow-hover);
            border-left-color: var(--primary-green);
          }
          
          .form-select {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            color: #374151;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(4px);
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            transition: all 0.15s ease-in-out;
            appearance: none;
          }
          
          .form-select:focus {
            color: #374151;
            background-color: white;
            border-color: var(--primary-green);
            outline: none;
          }
          
          .main-content {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: var(--card-shadow);
          }
          
          .prayer-card.active {
            border-left: 5px solid var(--primary-green);
            background-color: rgba(234, 247, 240, 0.8);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
          
          .prayer-card.active .time {
            color: var(--primary-green);
            font-weight: 700;
          }
          
          .prayer-card.active .icon {
            color: var(--primary-green);
          }
          
          .prayer-card .icon {
            color: #9ca3af;
            transition: color 0.3s ease;
          }
          
          .prayer-card:hover .icon {
            color: var(--primary-green);
          }
        `
      }} />
      
      <div className="w-full max-w-4xl mx-auto main-content">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="country">
                Country
              </label>
              <select className="form-select" id="country" name="country">
                <option>Morocco</option>
                <option>Algeria</option>
                <option>Tunisia</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="city">
                City
              </label>
              <select className="form-select" id="city" name="city">
                <option>Rabat</option>
                <option>Casablanca</option>
                <option>Marrakech</option>
                <option>Fes</option>
                <option>Tangier</option>
                <option>Agadir</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Rabat
            </h1>
            <p className="mt-2 text-lg" style={{ color: 'var(--text-secondary)' }}>
              Saturday, November 2, 2024 | 20 Rabi' al-Thani 1446
            </p>
          </div>
        </header>
        
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="prayer-card group">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Fajr
              </h2>
              <p className="text-3xl font-light mt-2" style={{ color: 'var(--text-secondary)' }}>
                05:30
              </p>
            </div>
            <i className="material-icons text-4xl icon">wb_twilight</i>
          </div>
          
          <div className="prayer-card group">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Sunrise
              </h2>
              <p className="text-3xl font-light mt-2" style={{ color: 'var(--text-secondary)' }}>
                06:45
              </p>
            </div>
            <i className="material-icons text-4xl icon">wb_sunny</i>
          </div>
          
          <div className="prayer-card group active">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Dhuhr
              </h2>
              <p className="text-3xl font-bold mt-2 time">
                12:30
              </p>
            </div>
            <i className="material-icons text-4xl icon">light_mode</i>
          </div>
          
          <div className="prayer-card group">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Asr
              </h2>
              <p className="text-3xl font-light mt-2" style={{ color: 'var(--text-secondary)' }}>
                15:45
              </p>
            </div>
            <i className="material-icons text-4xl icon">filter_drama</i>
          </div>
          
          <div className="prayer-card group">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Maghrib
              </h2>
              <p className="text-3xl font-light mt-2" style={{ color: 'var(--text-secondary)' }}>
                18:15
              </p>
            </div>
            <i className="material-icons text-4xl icon">bedtime</i>
          </div>
          
          <div className="prayer-card group">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Isha
              </h2>
              <p className="text-3xl font-light mt-2" style={{ color: 'var(--text-secondary)' }}>
                19:30
              </p>
            </div>
            <i className="material-icons text-4xl icon">nights_stay</i>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrayerTimes;