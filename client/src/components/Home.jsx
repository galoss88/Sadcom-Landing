import style from "../styles/Home.module.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../images/blackCodeImg.jpg"
import image2 from "../images/placeimg_286_180_tech.jpg"
import image3 from "../images/circulo-gris.png"
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
           <div className={style.FirstBlock}>
                <div className={style.FirstDescription}>
                    <h1><b>Sadcom</b></h1>
                    <h4>Gestiona tu negocio</h4>
                    <br/>
                    <p>Sadcom es una evolución de los sistemas ERP (planificación de recursos empresariales), en el cual puedes automatizar procesos de la empresa, integrar las distintas bases de datos de la compañía en un solo programa, ahorrar tiempo y costes. Está disponible en todos los dispositivos y cuenta con una interfaz atractiva y sencilla de usar.</p>
                    <br/>
                   {/*  <br/> */}
                    <div>
                        <Link to="/solutions" style={{"text-decoration": 'none'}}>
                            <h2><b>Comienza ahora, es gratis</b></h2>
                        </Link>
                    </div>
                </div>
                <div className={style.FirstVideo}>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100081627668392%2Fvideos%2F854370542232684%2F&show_text=false&width=560&t=0" /* width="560" */ height="314" allowFullScreen={true}   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
           </div>

           <div className={style.SecondBlock}>
                <div className={style.TitleBlock}>
                    <h2><b>Nuestras</b></h2>
                    <h2><b>soluciones</b></h2>
                    <hr></hr>
                </div>
                <div className={style.ContainerCard}>
                    <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "border-radius": "10px"}} className="text-center">
                        <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Versión gratuita</b></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <li>Emisión de comprobantes no fiscales</li>
                                <li>Control de stock</li>
                                <li>Cambio de precios</li>
                                <li>Módulo de artículos</li>
                                <br/> 
                            </Card.Text>
                            <Link to="/solutions">
                                <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Ver más</b></Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card border="none" style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "border-radius": "10px"}} className="text-center">
                        <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em',  "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px" }}><b>Versión de pago</b></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <li>Base de datos en la nube</li>
                                <li>Conección en red de múltiples usuarios</li>
                                <li>Cuenta corriente</li>
                                <li>Facturación</li>
                                <li>Reportes</li>
                            </Card.Text>
                            <Link to="/solutions">
                                <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Ver más</b></Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
           </div>

           <div className={style.ThirdBlock}>
                <div className={style.Coso}></div>
                <div>
                    <img className={style.Imag} src={image} alt="blackCode" width="400px"></img>
                    <div className={style.DetailContainer}>
                        <h3>Acerca de</h3>
                        <p>Nuestra versión gratuita tiene lo que necesitás para comenzar a administrar tu negocio. A medida que vayas creciendo y necesites más funcionalidades, pagá únicamente por las que requieras.</p>
                        <p>Tenemos un sistema con base de datos en la nube, para que puedas modificar desde cualquier dispositivo. Además vas a poder consultar reportes de ventas y cierres de cajas. También podrás descargar los comprobantes en pdf para enviarlos por WhatsApp.</p>
                    </div>
                </div>
           </div>

           <div className={style.ForthBlock}>
                <h4><b>¡Conoce a nuestro equipo!</b></h4>
                <div className={style.ContainerCardsTeam}>
                    <Card style={{ width: '16rem', height: "25rem", "margin-left": '11vw', "margin-top": "8vh"  }}>
                        <Card.Img variant="top" src={image2}/>
                        <Card.Body>
                            <Card.Title>Mario Olivares</Card.Title>
                            <Card.Text><i>Desktop developer, administrador de base de datos en SQL Server</i></Card.Text>
                            <Card.Text>Analista en sistemas de información, reparador de equipos electrónicos.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem', height: "25rem", "margin-left": '11vw', "margin-top": "8vh" }}>
                        <Card.Img variant="top" src={image2}/>
                        <Card.Body>
                            <Card.Title>Sebastian Bernachea</Card.Title>
                            <Card.Text><i>Team líder y desktop developer</i></Card.Text>
                            <Card.Text>Analista en Sistemas, desarrollador Full Stack y diseñador web.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem', height: "25rem", "margin-left": '11vw', "margin-top": "8vh"  }}>
                        <Card.Img variant="top" src={image2}/>
                        <Card.Body>
                            <Card.Title>Sofia Sawczuk</Card.Title>
                            <Card.Text><i>Web developer</i></Card.Text>
                            <Card.Text>Estudiante de ingeniería informática, desarrolladora Full Stack y nómade digital</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <Link to="/us" className={style.Link}>
                    <Button style={{"background-color": '#682AB7',  "color": "white", "margin-left": "47vw", "margin-top": "5vh"}} variant="light">Ver todos</Button>
                </Link>
                <div className={style.Coso2}></div>
           </div>

           {/* <div className={style.FifthBlock}>
                <h4><b>Opiniones de nuestros clientes</b></h4>
                <div>
                    <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', height: '35vh'}}>
                        <div className={style.SoyOtroDiv}>
                            <div className={style.FifthDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum!"</p>
                            </div>
                            <div className={style.SoyUnDiv}>
                                <p>Persona, from <b>Company</b></p>
                                <p><i>12/12/2022</i></p>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                    </Card>
                    <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', height: '35vh'}}>
                        <div className={style.SoyOtroDiv}>
                            <div className={style.FifthDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum!"</p>
                            </div>
                            <div className={style.SoyUnDiv}>
                                <p>Persona, from <b>Company</b></p>
                                <p><i>12/12/2022</i></p>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                    </Card>
                    <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', height: '35vh'}}>
                        <div className={style.SoyOtroDiv}>
                            <div className={style.FifthDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum!"</p>
                            </div>
                            <div className={style.SoyUnDiv}>
                                <p>Persona, from <b>Company</b></p>
                                <p><i>12/12/2022</i></p>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                    </Card>
                </div>
           </div> */}
        </div>
    )
}