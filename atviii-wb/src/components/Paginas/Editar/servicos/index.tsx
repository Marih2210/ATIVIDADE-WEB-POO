import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

function EditarServico(){
        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
                <h1>Editar Serviço</h1>
                <Button  variant="outline-dark" href='/Servicos'>Voltar</Button>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" defaultValue="Cortar unhas"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="20"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    )
};

export default EditarServico;