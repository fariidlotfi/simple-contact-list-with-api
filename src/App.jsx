import { useState, useEffect } from "react";
import "./App.css";
import ContactBox from "./Components/ContactBox";

const App = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const res = await response.json();
    setResult(res.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="contact-app-list-container">
      <div className="contact-app-search-input">
        <input
          type="text"
          placeholder="جستجو..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="contact-app-list">
        {search && result.length > 0 ? (
          <>
            {result.map((i) => {
              let name = i.name.title + " " + i.name.first + " " + i.name.last;
              let condition = name.toLowerCase();

              if (condition.includes(search))
                return (
                  <ContactBox
                    key={Math.floor(Math.random() * 100000)}
                    picture={i.picture.thumbnail}
                    name={name}
                    country={i.location.country}
                    email={i.email}
                    cell={i.cell}
                  />
                );
            })}
          </>
        ) : (
          <>
            {result.length > 0 ? (
              result.map((i) => {
                let name =
                  i.name.title + " " + i.name.first + " " + i.name.last;

                return (
                  <ContactBox
                    key={Math.floor(Math.random() * 100000)}
                    picture={i.picture.thumbnail}
                    name={name}
                    country={i.location.country}
                    email={i.email}
                    cell={i.cell}
                  />
                );
              })
            ) : (
              <p>not found</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
