const { Component } = require("react");

const TableHeader = () =>{
    return(
        <thead>
                 <th>Name</th>
                 <th>Job</th>
              </thead>
    )
}

const TableBody = (props) =>{
    const {charactersData} = props

    const row = charactersData.map((character)=>{
       return(<tr><td>{character.Name}</td>{character.Job}<td></td></tr>)
    })

    return(
        <tbody>
            {row}
                
              </tbody>

    )
}

class Table extends Component{
    render(){
        const {charactersData} = this.props
        return(
            <table>
             <TableHeader/>
             <TableBody charactersData={charactersData}/>
              
            </table>
        )
    }

}

export default Table