import React from 'react'
import {SafeAreaView,View,Text,Button} from 'react-native'

class ClassComponent  extends React.Component{
   constructor(){
       super();
       this.increase=this.increase.bind(this)
    //    this.state={
    //     counter:0,
    //     isFull:false,
    //     data:[{id:1,name:'Ali',surname:'Aydın'}]    
    //     }
   }
   state={
    counter:0,
    isFull:false,
    data:[{id:1,name:'Ali',surname:'Aydın'}]    
    }

   componentDidMount(){
        console.log("Class Component ComponentDidMount  worked");
   }
   
   componentDidUpdate(prevState){
       if (prevState.counter!==this.state.counter){
            console.log("componentDidUpdate triggered")
       }
   }

//    componentDidMount(){
//        this.myCounter =setInterval(()=>{
//            this.setState({counter:this.state.counter+1})
//        },1000);
//    }

//    componentWillUnmount(){
//        clearInterval(this.myCounter)
//    }
   



   increase  () {
       this.setState({counter:this.state.counter+1}) 
   }
    render(){      
        return(
            <SafeAreaView style={{flex:1,alignItems:'center',borderWidth:2,borderColor:'black'}}>
                <Text style={{fontSize:30}}>Class Component </Text>
                <Text style={{fontSize:30}}>Counter : {this.state.counter}</Text>
                <Button title="Increase" onPress={()=>this.increase()} />
            </SafeAreaView>
        )
    }
}
export {ClassComponent}