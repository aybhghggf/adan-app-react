import React, { useEffect, useState } from "react";

// Mock GlobalLoadingOverlay component since it's not defined
const GlobalLoadingOverlay = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center">
    <div className="text-2xl text-gray-600">Loading...</div>
  </div>
);

// All African countries with some major cities
const countries = {
  Morocco: ["Rabat", "Casablanca", "Marrakech", "Fes", "Tangier", "Agadir"],
  Algeria: ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna"],
  Tunisia: ["Tunis", "Sfax", "Sousse", "Kairouan", "Gabes", "Bizerte"],
  Egypt: ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez"],
  Nigeria: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City"],
  SouthAfrica: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"],
  Kenya: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika"],
  Ethiopia: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Bahir Dar", "Hawassa"],
  Ghana: ["Accra", "Kumasi", "Tamale", "Takoradi", "Ashaiman", "Cape Coast"],
  Uganda: ["Kampala", "Kira", "Mbarara", "Nansana", "Wakiso", "Lugazi"],
  Tanzania: ["Dar es Salaam", "Dodoma", "Mwanza", "Arusha", "Mbeya", "Tanga"],
};

const PrayerTimes = ({ getParams, TimesOfAdan }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [Loading, setLoading] = useState(true);

  let cities = country ? countries[country] || [] : [];

  // Mock function if getParams is not provided
  if (getParams) {
    getParams(city, country);
  }

  const timings = TimesOfAdan ? TimesOfAdan.data.data.timings : null;
  const date = TimesOfAdan ? TimesOfAdan.data.data.date : null;

  useEffect(() => {
    if (timings) setLoading(false);
    else setLoading(true);
  }, [timings]);

  if (Loading) return <GlobalLoadingOverlay />;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily: "'Amiri', 'Times New Roman', serif",
        backgroundColor: "#faf8f5",
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 177, 153, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #faf8f5 0%, #f4f1eb 100%)
        `,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
            
            :root {
                --primary-gold: #b8860b;
                --soft-gold: #f5f5dc;
                --warm-beige: #f7f3e9;
                --text-primary: #2c1810;
                --text-secondary: #5d4037;
                --text-muted: #8d6e63;
                --border-color: #d7ccc8;
                --card-shadow: 0 2px 8px rgba(139, 69, 19, 0.1);
                --card-shadow-hover: 0 8px 25px rgba(139, 69, 19, 0.15);
                --accent-copper: #cd853f;
            }
            
            .arabic-pattern {
                position: relative;
                overflow: hidden;
            }
            
            .arabic-pattern::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(45deg, 
                  transparent 30%, 
                  rgba(184, 134, 11, 0.1) 45%, 
                  rgba(184, 134, 11, 0.2) 50%, 
                  rgba(184, 134, 11, 0.1) 55%, 
                  transparent 70%);
                border-radius: 12px;
                z-index: -1;
            }
            
            .prayer-card {
                background: linear-gradient(135deg, #ffffff 0%, #fefdfb 100%);
                border-radius: 10px;
                padding: 1.75rem;
                box-shadow: var(--card-shadow);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid var(--border-color);
                position: relative;
                overflow: hidden;
            }
            
            .prayer-card::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
                transform: scaleX(0);
                transition: transform 0.4s ease;
            }
            
            .prayer-card:hover {
                transform: translateY(-8px);
                box-shadow: var(--card-shadow-hover);
                border-color: var(--primary-gold);
            }
            
            .prayer-card:hover::after {
                transform: scaleX(1);
            }
            
            .form-select {
                display: block;
                width: 100%;
                padding: 1rem 1.25rem;
                font-size: 1rem;
                color: var(--text-primary);
                background: linear-gradient(135deg, #ffffff 0%, #fefdfb 100%);
                border: 2px solid var(--border-color);
                border-radius: 8px;
                transition: all 0.3s ease;
                font-family: 'Noto Sans Arabic', sans-serif;
                appearance: none;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
                background-position: right 1rem center;
                background-repeat: no-repeat;
                background-size: 1rem;
            }
            
            .form-select:focus {
                border-color: var(--primary-gold);
                outline: none;
                box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.1);
                background-color: #ffffff;
            }
            
            .main-content {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(254, 253, 251, 0.9) 100%);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                padding: 2.5rem;
                box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
                border: 1px solid rgba(215, 204, 200, 0.5);
            }
            
            .prayer-card.active {
                background: linear-gradient(135deg, #f7f3e9 0%, #f5f5dc 100%);
                border-color: var(--primary-gold);
                box-shadow: 0 8px 25px rgba(184, 134, 11, 0.2);
                transform: scale(1.02);
            }
            
            .prayer-card.active::after {
                transform: scaleX(1);
                background: var(--primary-gold);
            }
            
            .prayer-card.active .time {
                color: var(--primary-gold);
                font-weight: 700;
            }
            
            .prayer-card.active .icon {
                color: var(--primary-gold);
            }
            
            .prayer-card .icon {
                color: var(--text-muted);
                transition: all 0.3s ease;
            }
            
            .prayer-card:hover .icon {
                color: var(--accent-copper);
                transform: scale(1.1);
            }
            
            .city-title {
                font-family: 'Amiri', serif;
                background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-gold) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .geometric-border {
                position: relative;
                padding: 1rem 0;
            }
            
            .geometric-border::before,
            .geometric-border::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 2px;
                background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
            }
            
            .geometric-border::before {
                top: 0;
            }
            
            .geometric-border::after {
                bottom: 0;
            }
          `,
        }}
      />

      <div className="w-full max-w-4xl mx-auto main-content">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-3" style={{ color: "var(--text-secondary)", fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                البلد / Country
              </label>
              <select
                className="form-select arabic-pattern"
                id="country"
                name="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCity("");
                }}
              >
                <option value="">Select Country</option>
                {Object.keys(countries).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-3" style={{ color: "var(--text-secondary)", fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                المدينة / City
              </label>
              <select
                className="form-select arabic-pattern"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!country}
              >
                <option value="">Select City</option>
                {cities.map((cityName, index) => (
                  <option value={cityName} key={index}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center geometric-border">
            <h1 className="text-4xl sm:text-5xl font-bold city-title mb-2">
              {city || "الرباط"}
            </h1>
            <p className="text-lg font-medium" style={{ color: "var(--text-secondary)", fontFamily: "'Noto Sans Arabic', sans-serif" }}>
              {date ? date.gregorian.date : "------"} <br />
              {date ? date.hijri.date : "------"}
            </p>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { prayer: "Fajr", arabic: "الفجر" },
            { prayer: "Sunrise", arabic: "الشروق" },
            { prayer: "Dhuhr", arabic: "الظهر" },
            { prayer: "Asr", arabic: "العصر" },
            { prayer: "Maghrib", arabic: "المغرب" },
            { prayer: "Isha", arabic: "العشاء" }
          ].map(({ prayer, arabic }, i) => (
            <div
              key={prayer}
              className={`prayer-card group ${prayer === "Dhuhr" ? "" : ""}`}
            >
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)", fontFamily: "'Noto Sans Arabic', sans-serif" }}>
                  {arabic}
                </h2>
                <h3 className="text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  {prayer}
                </h3>
                <p className={`text-2xl ${prayer === "Dhuhr" ? "font-bold time" : "font-light"}`} style={{ color: "var(--text-secondary)", fontFamily: "'Amiri', serif" }}>
                  {timings ? timings[prayer] : "--:--"}
                </p>
              </div>
              <i className="material-icons text-3xl icon">
                {{
                  Fajr: "wb_twilight",
                  Sunrise: "wb_sunny",
                  Dhuhr: "light_mode",
                  Asr: "filter_drama",
                  Maghrib: "bedtime",
                  Isha: "nights_stay",
                }[prayer]}
              </i>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default PrayerTimes;