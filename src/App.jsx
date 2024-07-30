import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [favSub, setFavSub] = useState([]);
  const [url, setUrl] = useState('');
  const [choice, setChoice] = useState('');
  const [about, setAbout] = useState('');

  // Handle name input
  function changeName(event) {
    setName(event.target.value);
  }

  // Handle last name
  function changeLastname(event) {
    setLastname(event.target.value);
  }

  // Handle email
  function changeEmail(event) {
    setEmail(event.target.value);
  }

  // Handle dob
  function handleDob(event) {
    setDob(event.target.value);
  }

  // Handle gender
  function handleGender(event) {
    setGender(event.target.value);
  }

  // Handle about
  function handleAbout(event) {
    setAbout(event.target.value);
  }

  // Handle favorite subjects
  function handleFavSub(event) {
    const { value, checked } = event.target;
    setFavSub(prev => {
      if (checked) {
        return [...prev, value]; // Add subject if checked
      } else {
        return prev.filter(sub => sub !== value); // Remove subject if unchecked
      }
    });
  }

  // Handle choice
  function handleChoice(event) {
    setChoice(event.target.value);
  }

  // Handle url
  function handleUrl(event) {
    setUrl(event.target.value);
  }

  // Handle submit event
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Last Name: ", lastname);
    console.log("Email: ", email);
    console.log("DOB: ", dob);
    console.log("Gender: ", gender);
    console.log("Favorite Subjects: ", favSub);
    console.log("Choice: ", choice);
    console.log("URL: ", url);
    console.log("About: ", about);
  }

  return (
    <div className='form'>
      <form>
        <h1 style={{ textAlign: "center" }}>Job Query Submission Form</h1>
        <label>First Name</label>
        <input
          type='text'
          placeholder='Enter Your First Name'
          onChange={changeName}
        /><br /><br />
        <label>Last Name</label>
        <input
          type='text'
          placeholder='Enter Your Last Name'
          onChange={changeLastname}
        /><br /><br />
        <label>Date of Birth</label>
        <input type='date' onChange={handleDob} /><br /><br />
        <label>Email</label>
        <input type='email' onChange={changeEmail} placeholder='Enter Your Email Id' /><br /><br />
        <label>Contact</label>
        <input type='number' maxLength={10} placeholder='+91 6753562818' /><br /><br />

        <label>Choose Your Gender</label>
        <div className='gender'>
          <label>Male</label>
          <input type='radio' name='gender' value='Male' onChange={handleGender} />
          <label>Female</label>
          <input type='radio' name='gender' value='Female' onChange={handleGender} />
          <label>Other</label>
          <input type='radio' name='gender' value='Other' onChange={handleGender} />
        </div><br /><br />

        <label>Choose Your Fav Subject</label>
        <div className='subject'>
          <label>English</label>
          <input type='checkbox' value='English' onChange={handleFavSub} />
          <label>Science</label>
          <input type='checkbox' value='Science' onChange={handleFavSub} />
          <label>Math</label>
          <input type='checkbox' value='Math' onChange={handleFavSub} />
        </div><br /><br />
        <label>Enter URL</label>
        <input type='text' placeholder='Enter Your Portfolio URL' onChange={handleUrl} /><br /><br />
        <label>Select Your Choice</label>
        <select onChange={handleChoice}>
          <option>English Teacher</option>
          <option>Science Teacher</option>
          <option>Math Teacher</option>
        </select><br /><br />
        <label>About</label>
        <textarea placeholder='Write Something About You...' onChange={handleAbout}></textarea><br /><br />
        <label>Submit or Reset</label>
        <div className='button'>
          <button onClick={handleSubmit}>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>

      <div className='logo'>
        <img src='https://static.toiimg.com/photo/109457431/109457431.jpg?v=3'
          height={"129%"}
          alt="Logo"
        />
      </div>

    </div>
  );
}

export default App;
