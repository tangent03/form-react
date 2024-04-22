import "./App.css";
import {useState} from 'react';

function App() {

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
    

  })

  function changeHandler(event){
      const {name, value , checked, type} = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name] : type ==="checkbox" ? checked : value
      }))
  }

  function submitHandler(event){
      event.preventDefault();

      console.log("Finally Printing the value of form Data :");
      console.log(formData);
  }

  return (
    <div iv className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name : </label>
        <br/>
        
        <input
        type='text'
        name="firstName"
        id="firstName"
        placeholder="Aman"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
         />
        <br/>
        <label htmlFor="firstName">Last Name : </label>
        <br/>
        
        <input
        type='text'
        name="lastName"
        id="lastName"
        placeholder="Dixit"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
         />
         <br/>

        <label htmlFor="firstName">Email address : </label>
        <br/>
        
        <input
        type='email'
        name="email"
        id="email"
        placeholder="amanawp03@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
         />

        <br/>

        <label htmlFor="country">Country</label>
        <br/>
        <select 
        id="country"
        name="country"
        value={formData.country}
        className="outline"
        onChange={changeHandler}
        >
          <option>India</option>
          <option>United State</option>
          <option>Israel</option>
          <option>Mexico</option>

        </select>

        <br/>
        <label htmlFor="streetAddress">Street address : </label>
        <br/>
        
        <input
        type='text'
        name="streetAddress"
        id="streetAddress"
        placeholder="B-25C"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
         />
         <br/>

         
        <label htmlFor="city">City : </label>
        <br/>
        
        <input
        type='text'
        name="city"
        id="city"
        placeholder="Hyderabad"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
         />
         <br/>
         <label htmlFor="state">State/Province : </label>
        <br/>
        
        <input
        type='text'
        name="state"
        id="state"
        placeholder="Bihar"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
         />
         <br/>
         <label htmlFor="postalCode">State/Province : </label>
        <br/>
        
        <input
        type='text'
        name="postalCode"
        id="postalCode"
        placeholder="411015"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
         />
         <br/>

        <br/>
         <fieldset>
          <legend>Emails</legend>
          <div className="flex">
              <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}/>

              <div>
                <label htmlFor="comments">Comments</label>
                <p>get Notified when someone posts a comment on a posting.</p>
              </div>
          </div>


          
          <div className="flex">
              <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.canditates}
              onChange={changeHandler}/>

              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get Notified when candidate applies for a job.</p>
              </div>
          </div>


          
          <div className="flex">
              <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}/>

              <div>
                <label htmlFor="offers">Offers</label>
                <p>Get Notified when candidate accepts or rejects an offer.</p>
              </div>
          </div>
          
        <br></br>
        <br/>
         </fieldset>


         <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
          type="radio"
          name="pushNotifications"
          id="pushEverything"
          value="Everything"
          onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>

          
          <br/>
          <input
          type="radio"
          name="pushNotifications"
          id="pushEmail"
          value="Same as Email"
          onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>
          <br/>
          <input
          type="radio"
          name="pushNotifications"
          id="pushNothing"
          value="No Push Notifications"
          onChange={changeHandler}
          />

          <label htmlFor="pushNothing">No Push Notifications</label>

         </fieldset>

         <button className=" bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
