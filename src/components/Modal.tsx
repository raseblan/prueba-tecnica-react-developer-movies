import { GlobalWatch } from "../interfaces/globalWatch";

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    currentModalData: GlobalWatch;
}

export const Modal: React.FC<modalProps> = ({ isOpen, onClose,currentModalData  }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-content">
                <h2>{currentModalData.title}</h2>
                    <div style={{ display: 'grid', justifyContent: 'center' }}>
                        <img className="img-series-pelis" src={currentModalData.images["Poster Art"].url} alt=""  />
                        <p className="series-description">{currentModalData.releaseYear}</p>
                    </div>
                    <p className="series-description">{currentModalData.description}</p>
                </div>
            </div>

        </div>
    );
}

