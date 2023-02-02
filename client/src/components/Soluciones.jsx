import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../styles/Soluciones.module.css'

export default function Soluciones() {
    return (
        <div className={style.Soluciones}>
            <div className={style.FirstBlock}>
                <h1><b>Nuestras soluciones</b></h1>
                <hr></hr>
            </div>

            <div className={style.SecondBlock}>
                <Table responsive striped bordered hover style={{width: '80vw', "border-radius": "10px", }}>
                    <thead style={{height: '10vh'}}>
                        <tr className="text-center" style={{'background-color': '#682AB7', 'color': 'white', "border-radius": "10px"}}> 
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Características</th>
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Versión gratuita</th>
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Versión de pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Requiere instalación</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Emisión de comprobantes no fiscales</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo artículos</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Control de stock</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Cambio de precios</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Base de datos en la nube</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Conección en red de múltiples usuarios</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulos proveedores</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo clientes</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Cuenta corriente</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Facturación</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Lista de precios</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Reportes</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo compras</td>
                            <td className="text-center" >No</td>
                            <td className="text-center" >Si</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className={style.ThirdBlock}>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Versión gratuita</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>$0</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Card.Text>
                        <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Versión de pago</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Uso base del software</p>
                            <p>+</p>
                            <p>Un módulo específico a elección</p>
                            <p>$$$ <b>mensuales</b></p>
                        </Card.Text>
                        <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7", 'margin-top': '20px' }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Versión de pago</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Uso base del software</p>
                            <p>+</p>
                            <p>Un módulo específico a elección</p>
                            <p>Precio <b>anual con descuentos varios</b></p>
                        </Card.Text>
                        <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    )
}