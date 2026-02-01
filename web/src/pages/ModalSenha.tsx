import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import CustomInputGroup from "../components/CustomInputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useAppNavigation } from "../contexts/NavigationContext";



function ModalSenha() {
    const navigation = useNavigate();
    const { isNewPasswordVisible, setIsNewPasswordVisible } = useAppNavigation();

    const headerContent =(
        <div className="modal__header">
            <span >Criar Nova Senha</span>
        </div>
    );

    const footerContent = (
        <div className="modal__footer">
            <Button label="Fechar" text onClick={() => {setIsNewPasswordVisible(false); navigation(-1)}} className="p-button-text" />
            <Button label="Salvar" icon="pi pi-save" autoFocus />
        </div>
    );
   

    return (
        <>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setIsNewPasswordVisible(true)} /> */}
            <Dialog className="modal" modal header={headerContent} footer={footerContent} draggable={false} resizable={false} visible={isNewPasswordVisible} style={{ width: '35vw', left: '10rem' }} onHide={() => {if (!isNewPasswordVisible) return; setIsNewPasswordVisible(false); navigation(-1) }}>
                <div className="modal__content">
                    <p>Os itens com (*) são considerados obrigatórios para a criação do item.</p>
                    <CustomInputGroup label="Nome da Plataforma *" placeholder="Digite o Nome da Plataforma..." />
                    <CustomInputGroup type="password" label="Senha Escolhida *" placeholder="Digite a senha ou gere uma nova..." message={<p>Gerar uma nova senha? <Link to='/gerador-senhas'>Clique aqui</Link></p>} />
                    <CustomInputGroup type="textArea" label="Descrição" placeholder="Digite a descrição para o item..." />
                    <CustomInputGroup label="URL" placeholder="Digite a url da plataforma..." />
                </div>
            </Dialog>
        </>
    )
}

export default ModalSenha
