import React from "react";

function SaveResponse() {
  const [userEmail, setUserEmail] = React.useState("");

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userEmail === "") {
      alert("Can't submit empty email");
      return;
    }

    // Create new responses (CRUD)
    fetch(
      "https://module-7-test-e4667-default-rtdb.firebaseio.com/emails.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: userEmail,
        }),
      }
    )
      .then((res) => {
        // console.log("res: ", res);
        return res.json();
      })
      .then((data) => {
        console.log("data: ", data);
      });

    setUserEmail("");

    alert("submitted email on API");
  };
  return (
    <div>
      <div className="btn-container">
        {/* <div className="ip">
          <input type="text" />
        </div>
        <div className="btn">
          <button>Subscribe</button>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="ip">
            <input
              type="text"
              placeholder="Your Email"
              onChange={handleUserEmailChange}
              value={userEmail}
            />
          </div>
          <div className="btn">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SaveResponse;
