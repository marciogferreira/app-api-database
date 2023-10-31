import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { AuthContext } from './src/contexts/AuthContext';
import RoutePrivate from './src/routes/RoutePrivate';
import RoutePublic from './src/routes/RoutePublic';

export default function App() {
  const[isLogged, setIsLogged] = useState(false);

  
  function logout() {
      localStorage.removeItem('token');
      setIsLogged(false);
  }

  useEffect(function(){
      const token = localStorage.getItem('token');
      if(token) {
        setIsLogged(true);
      }
  }, []);
  
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, logout }}>
      {isLogged === true ? 
        <RoutePrivate />
      : 
        <RoutePublic />
      }
    </AuthContext.Provider>
  );
}

