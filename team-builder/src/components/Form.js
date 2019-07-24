import React, { useState } from 'react';

export function Form() {
    const [team, setTeam] = useState([]);
    const [member, setMember] = useState({name: '', email: '', role: ''});

    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        console.log(
          "handleChange",
          event.target.name,
          event.target.value,
          updatedMember
        );
        setMember(updatedMember);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        console.log("team: ", team);
        setTeam(team.push(member));

      }

    console.log('Form');
    return (

        <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            id="role"
            name="role"
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>

    );
}



