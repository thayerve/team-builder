import React, { useState } from 'react';

export function Form() {
    const [team, setTeam] = useState([{name: 'one', email: '1', role: 'first'}, {name: 'two', email: '2', role: 'second'}]);
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
        // const updatedTeam = team.push(member);
        setTeam([...team, member]);
        console.log("team: ", team);
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
          <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name of you"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
          <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email of you"
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
                        placeholder="role of you"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Submit!</button>
            </form>

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
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}



