import React, { useState } from 'react';

import Form from './components/Form';

const initialValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState(initialValues)


  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues(initialValues)
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
        />
        {members.map((member, index) => {
          return (
            <div key={index}>
              {member.email}, {member.name}, {member.role}
            </div>
          )
        })}
    </div>
  );
}

export default App;
