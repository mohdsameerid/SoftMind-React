import "./App.css";
import { useState } from "react";

function App() {
  const [whether, setWhether] = useState("Delhi");
  // const [data, setData] = useState();

  const [fetchedWhetherData, setFetchedWhetherData] = useState(null);
  const indianCities = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Patna",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Firozabad",
    "Ludhiana",
    "Rajkot",
    "Agra",
    "Siliguri",
    "Nashik",
    "Faridabad",
    "Patiala",
    "Meerut",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Dhanbad",
    "Jodhpur",
    "Amritsar",
    "Raipur",
    "Allahabad",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandrapur",
    "Hubli-Dharwad",
    "Bareilly",
    "Moradabad",
    "Mysore",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Tiruchirappalli",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Guntur",
    "Bhiwandi",
    "Saharanpur",
    "Gorakhpur",
    "Bikaner",
    "Amravati",
    "Noida",
    "Jamshedpur",
    "Bhilai",
    "Cuttack",
    "Firozabad",
    "Kochi",
    "Nellore",
    "Bhavnagar",
    "Dehradun",
    "Durgapur",
    "Asansol",
    "Rourkela",
    "Nanded",
    "Kolhapur",
    "Ajmer",
    "Akola",
    "Gulbarga",
    "Jamnagar",
    "Ujjain",
    "Loni",
    "Siliguri",
    "Jhansi",
    "Ulhasnagar",
    "Nellore",
    "Jammu",
    "Sangli-Miraj & Kupwad",
    "Belgaum",
    "Mangalore",
    "Ambattur",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Jalgaon",
    "Udaipur",
    "Maheshtala",
    "Nizamabad",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Kanpur",
    "Jaipur",
    "Lucknow",
    "Nagpur",
    "Patna",
    "Indore",
    "Vadodara",
    "Bhopal",
    "Coimbatore",
    "Ludhiana",
    "Nashik",
    "Madurai",
    "Agra",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Dhanbad",
    "Jodhpur",
    "Amritsar",
    "Allahabad",
    "Ranchi",
    "Howrah",
    "Solapur",
    "Hubli-Dharwad",
    "Mysore",
    "Tiruppur",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Bareilly",
    "Moradabad",
    "Warangal",
    "Bhiwandi",
    "Bhubaneswar",
    "Patiala",
    "Agra",
    "Kollam",
    "Rajpur Sonarpur",
    "Bilaspur",
    "Shahjahanpur",
    "Thrissur",
    "Korba",
    "Rajpur Sonarpur",
    "Bilaspur",
    "Shahjahanpur",
    "Thrissur",
    "Korba",
    "Bhilai Nagar",
    "Jamshedpur",
    "Cuttack",
    "Nellore",
    "Kochi",
    "Thiruvananthapuram",
    "Cuttack",
    "Nellore",
    "Kochi",
    "Thiruvananthapuram",
    "Nashik",
    "Rourkela",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandrapur",
    "Hubli-Dharwad",
    "Bareilly",
    "Moradabad",
    "Mysore",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Tiruchirappalli",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Guntur",
    "Bhiwandi",
    "Saharanpur",
    "Gorakhpur",
    "Bikaner",
    "Amravati",
    "Noida",
    "Jamshedpur",
    "Bhilai",
    "Cuttack",
    "Firozabad",
    "Kochi",
    "Nellore",
    "Bhavnagar",
    "Dehradun",
    "Durgapur",
    "Asansol",
    "Rourkela",
    "Nanded",
    "Kolhapur",
    "Ajmer",
    "Akola",
    "Gulbarga",
    "Jamnagar",
    "Ujjain",
    "Loni",
    "Siliguri",
    "Jhansi",
    "Ulhasnagar",
    "Nellore",
    "Jammu",
    "Sangli-Miraj & Kupwad",
    "Belgaum",
    "Mangalore",
    "Ambattur",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Jalgaon",
    "Udaipur",
    "Maheshtala",
    "Nizamabad",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Kanpur",
    "Jaipur",
    "Lucknow",
    "Nagpur",
    "Patna",
    "Indore",
    "Vadodara",
    "Bhopal",
    "Coimbatore",
    "Ludhiana",
    "Nashik",
    "Madurai",
    "Agra",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Dhanbad",
    "Jodhpur",
    "Amritsar",
    "Allahabad",
    "Ranchi",
    "Howrah",
    "Solapur",
    "Hubli-Dharwad",
    "Mysore",
    "Tiruppur",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Bareilly",
    "Moradabad",
    "Warangal",
    "Bhiwandi",
    "Bhubaneswar",
    "Patiala",
    "Agra",
    "Kollam",
    "Rajpur Sonarpur",
    "Bilaspur",
    "Shahjahanpur",
    "Thrissur",
    "Korba",
    "Bhilai Nagar",
    "Jamshedpur",
    "Cuttack",
    "Nellore",
    "Kochi",
    "Thiruvananthapuram",
    "Nashik",
    "Rourkela",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandrapur",
    "Hubli-Dharwad",
    "Bareilly",
    "Moradabad",
    "Mysore",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Tiruchirappalli",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Guntur",
    "Bhiwandi",
    "Saharanpur",
    "Gorakhpur",
    "Bikaner",
    "Amravati",
    "Noida",
    "Jamshedpur",
    "Bhilai",
    "Cuttack",
    "Firozabad",
    "Kochi",
    "Nellore",
    "Bhavnagar",
    "Dehradun",
    "Durgapur",
    "Asansol",
    "Rourkela",
    "Nanded",
    "Kolhapur",
    "Ajmer",
    "Akola",
    "Gulbarga",
    "Jamnagar",
    "Ujjain",
    "Loni",
    "Siliguri",
    "Jhansi",
    "Ulhasnagar",
    "Nellore",
    "Jammu",
    "Sangli-Miraj & Kupwad",
    "Belgaum",
    "Mangalore",
    "Ambattur",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Jalgaon",
    "Udaipur",
    "Maheshtala",
    "Nizamabad",
  ];

  async function ApiCallMethod() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${whether}&appid=6c90d8e93cc89ba106a88517925eb5d1`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);

    setFetchedWhetherData(json);
    // const res = fetchedWhetherData;
    // setWhether("");
    console.log(fetchedWhetherData);
    // let temp_max = fetchedWhetherData.list[0].main.temp_max;
    // let  = fetchedWhetherData.list[0].main.temp_max;
    // let temp_max = fetchedWhetherData.list[0].main.temp_max;
    // console.log(temp + " " + temp_max + " " + temp_min);
    // let { description, main } = fetchedWhetherData.list[0].weather[0];
    // console.log(description);
    // console.log(main);
  }

  function handle() {
    setTimeout(() => {
      setFetchedWhetherData(null);
      ApiCallMethod();
    }, 500);
  }

  // const res = fetchedWhetherData?.list[0]?.weather[0]?.description;

  return (
    <div className="App">
      <div className="container">
        <div className="sample">
          <h1>Hello Weather</h1>
          <input
            type="text"
            placeholder="Search here"
            value={whether}
            onChange={(e) => setWhether(e.target.value)}
          />
          <button className="button" onClick={handle} >
            Search
          </button>
        </div>

        {/* {whether === "" && <div>dd</div>} */}

        {fetchedWhetherData !== null ? (
          indianCities.includes(whether) ? (
            <div className="details-container">
              <span className="statesandtemp">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h1 className="font">
                  {fetchedWhetherData.city.name || "null"}
                </h1>
                &nbsp;&nbsp;
                <h1 className="font">
                  Temp:{" "}
                  {Math.floor(
                    fetchedWhetherData.list[0].main.temp_min - 272.15
                  ) || "null"}
                </h1>
              </span>
              <p>
                Max_Temp:{" "}
                {Math.floor(fetchedWhetherData.list[0].main.temp_max - 272.15)}
              </p>

              <p>
                Max_min:{" "}
                {Math.floor(fetchedWhetherData.list[0].main.temp_min - 272.15)}
              </p>
            </div>
          ) : whether[0].toUpperCase() === whether[0] ? (
            <div className="button">Please enter correct name.</div>
          ) : (
            <div>Please enter first Letter in Upper case</div>
          )
        ) : (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
