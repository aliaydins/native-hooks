import React,{useState,useEffect} from 'react'
import {SafeAreaView, View,Text,Button} from 'react-native'

const FunctionComponent =()=>{
    
    const [counter, setCounter]=useState(0)
    const [isFull,setIsFull]=useState(false)
    const [data,setData]=useState([{id:1,name:'Ali',surname:'Aydın'}])

    const increase = () =>{
        setCounter(counter+1)
    }
    
    useEffect(()=>{
        console.log("Function Component useEffect worked")
    },[])
    
    useEffect(()=>{
        console.log("useEffect triggered")
    },[counter])
    
    // useEffect(()=>{
    //     const myCounter =setInterval(()=>{
    //         setCounter(counter=>counter+1);
    //     },1000);

    //     return ()=>clearInterval(myCounter)
    // },[counter])

    // useEffect(()=>{
    //     console.log("useEffect triggered")
    // })

    return(
        <SafeAreaView style={{flex:1,fontSize:'bold',alignItems:'center',borderWidth:2,borderColor:'black'}}>
            <Text style={{fontSize:30}}>Function Component</Text>
            <Text style={{fontSize:30}}>Counter : {counter}</Text>
            <Button title="Increase" onPress={()=>increase()}/>
        </SafeAreaView>
    )
}

export {FunctionComponent}