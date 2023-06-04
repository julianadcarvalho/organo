import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import '../Formulario/Formulario.css'
import ListaSuspensa from '../ListaSuspensa';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem,
            time
        })
        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label ="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio = {true} 
                    label ="Cargo" 
                    placeholder="Digite seu cargo"
                    valor = {cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                    label ="Imagem"
                    placeholder="Insira sua imagem"
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    label = "Time" 
                    itens ={props.times}
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao 
                    texto="Criar Card"
                    />
            </form>
        </section>
    )
}

export default Formulario