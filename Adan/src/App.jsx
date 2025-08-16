import axios from "axios";
import PrayerTimes from "./Ui";
import { useEffect, useState } from "react";

export default function App() {
  const [object, setObject] = useState(null);
  const [times, setTimes] = useState(null);
  const [city, setCity] = useState("Rabat");
  const [country, setCountry] = useState("Morocco");

  useEffect(() => {
    if(city && country) {
      axios
        .get(
          "https://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country
        )
        .then((response) => {
          setObject(response);
          setTimes(response.data.data.timings);
        });
    }
  }, [city, country]);

  function getCityAndCountry(selectedCity, selectedCountry){
      setCity(selectedCity);
      setCountry(selectedCountry);
  }


  return <PrayerTimes getParams={getCityAndCountry} TimesOfAdan={object} />;
}
