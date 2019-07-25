import React, { useState } from 'react';

export function Form() {
    const [team, setTeam] = useState([{name: 'Virginia', email: 'vt@gmail.com', role: 'student'}, {name: 'Elaine', email: 'el@yahoo.com', role: 'developer'}]);
    const [member, setMember] = useState({ name: '', email: '', role: ''});

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
        setTeam([...team, member]);
        console.log("team: ", team);
        setMember({ name: '', email: '', role: ''});
    }

    return (
        <div>

<div className="memberList">
                <h2>List of Members</h2>
                <div>
                {team.map((member) => {
                    console.log('render element for ', member);
                    return (
                        <div key={member.name}>
                        <p>Name: {member.name}</p>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                        <br />
                        </div>
                    )
                })}
                </div>
            </div>

            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
          <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={member.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
          <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                        value={member.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Role:
          <input
                        type="text"
                        id="role"
                        name="role"
                        placeholder="Role"
                        value={member.role}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Add new member</button>
            </form>

        </div>
    );
}



