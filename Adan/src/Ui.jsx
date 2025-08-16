import React, { useEffect, useState } from "react";
import GlobalLoadingOverlay from "./Loading";

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

  getParams(city, country);

  const timings = TimesOfAdan ? TimesOfAdan.data.data.timings : null;
  const date = TimesOfAdan ? TimesOfAdan.data.data.date : null;
  console.log(date);

  useEffect(() => {
    if (timings) setLoading(false);
    else setLoading(true);
  }, [timings]);

  if (Loading) return <GlobalLoadingOverlay />;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundColor: "#f7fafc",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1604420459383-7459178c1875?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
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
          `,
        }}
      />

      <div className="w-full max-w-4xl mx-auto main-content">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="country">
                Country
              </label>
              <select
                className="form-select"
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
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="city">
                City
              </label>
              <select
                className="form-select"
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

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
              {city || "Rabat"}
            </h1>
            <p className="mt-2 text-lg" style={{ color: "var(--text-secondary)" }}>
              {date ? date.gregorian.date : "------"} <br />
              {date ? date.hijri.date : "------"}
            </p>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer, i) => (
            <div
              key={prayer}
              className={`prayer-card group ${prayer === "Dhuhr" ? "active" : ""}`}
            >
              <div>
                <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {prayer}
                </h2>
                <p className={`text-3xl ${prayer === "Dhuhr" ? "font-bold time" : "font-light"} mt-2`} style={{ color: "var(--text-secondary)" }}>
                  {timings ? timings[prayer] : "--:--"}
                </p>
              </div>
              <i className="material-icons text-4xl icon">
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
