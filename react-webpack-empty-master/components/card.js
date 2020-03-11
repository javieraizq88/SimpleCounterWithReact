const Nombre = props => <h1>{props.name}</h1>;
class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
    cambiarNombre(){
        this.setState({
            name: 'Luis'
        })
    }
    cambiarNombreOtraVez = () => {
        this.setState({
            name: 'Pedro'
        })
    }
    cambiarNombrePorTeclado = e => {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return (
            <>
            <Nombre name={this.state.name} /> <br />
            <input type="text" onChange={(evento) => this.cambiarNombrePorTeclado(evento)}/>
            <button onClick={this.cambiarNombre}>Cambiar Nombre</button>
            <button onClick={this.cambiarNombreOtraVez}>Cambiar Nombre Otra Vez</button>
            </>
        )
    }
}
ReactDOM.render(<Home />, document.querySelector("#root"));