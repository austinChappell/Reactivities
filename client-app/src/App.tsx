import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

// Local Typings
interface Value {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [values, setValues] = useState<Value[]>([]);

  async function fetchData() {
    const response  = await axios('http://localhost:5000/api/values');
    setValues(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      <List>
        {values.map(val => (
          <List.Item
            key={val.id}
          >
            {val.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
