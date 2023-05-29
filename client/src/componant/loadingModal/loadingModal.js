import "./loadingModal.scss";

const LoadingModal = (props) => {
    return (
        <>  
            {props.show ? <div className="containerLoading">
                <div className="spinner-border spin" role="status">
                    <span class="sr-only"></span>
                </div>
            </div> : null}
            
        </>
    )
}

export default LoadingModal;