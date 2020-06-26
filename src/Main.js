import React,{useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {ClassComponent, FunctionComponent} from './components';

const Main = () => {
  const [isVisible , setIsVisible]=useState(true);
  const [isVisibleFunc,setIsVisibleFunc]=useState(true)
  return (
    <SafeAreaView style={{flex: 1}}>
        <Button title="Gizle" onPress={()=>setIsVisible(!isVisible)}/>
        {isVisible?<ClassComponent />:<Text>Class Component Gizlendi</Text>}
        <Button title="Gizle" onPress={()=>setIsVisibleFunc(!isVisibleFunc)}/>
        {isVisibleFunc?<FunctionComponent />:<Text>Function Component Gizlendi</Text>}
    </SafeAreaView>
  );
};

export {Main};
