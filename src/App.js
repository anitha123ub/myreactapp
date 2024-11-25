import {Component} from 'react'
import Table from './table'
class App extends Component{
    render(){
      const characters = [{
        Name : 'Anitha',
        Job : 'Front-End Developer',
      },
    {
      Name : 'Yashika',
      Job : 'Back-End Developer',
    },
    {
      Name:'Abi',
      Job : 'Web Designer',
    },
    {
      Name:'Pradeep',
      Job :'Software Developer',
    }
  ]
      return (
        <div className='container'>
          <h1>Table</h1>
          <Table charactersData={characters}/>
        </div>
      )
    }
  
  }

  export default App