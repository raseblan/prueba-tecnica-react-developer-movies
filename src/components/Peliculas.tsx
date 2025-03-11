import { useEffect, useState } from "react";
import json from "../post/sample.json";
import { Modal } from "./Modal";
import { GlobalWatch } from "../interfaces/globalWatch";
import { useDispatch, useSelector } from "react-redux";
import { currentModalDataSet, errorSet, isModalOpenSet, jsonFiltradoSet, loadingSet, selectGlobal } from "../store/globalSlice";



export const Peliculas = () => {
    const dispatch = useDispatch();
    const {loading, error,jsonFiltrado, isModalOpen, currentModalData} = useSelector(selectGlobal)


    useEffect(() => {
        dispatch(loadingSet(true));
        setTimeout(() => {
            const jsonPass = json.entries
                .filter((j: GlobalWatch) => j.releaseYear >= 2010 && j.programType === "movie")
                .sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    return 0;
                })
                .slice(0, 20);

            if (jsonPass.length === 0) {
                dispatch(errorSet(true));
            } else {
               dispatch(jsonFiltradoSet(jsonPass));
            }
            dispatch(loadingSet(false));
        }, 2000);
    }, []);

    const handleOpenModal = (peliculas: GlobalWatch) => {
       dispatch(currentModalDataSet(peliculas));
       dispatch(isModalOpenSet(true));
    };

    const handleCloseModal = () => {
        dispatch(isModalOpenSet(false));
        dispatch(currentModalDataSet(null));
    };
    return (
        <>
            {loading ? (
                <div className='div-global__inicio'>
                    <p>Loading...</p>
                </div>

            ) : error ? (
                <div className='div-global__inicio'>
                    <p>Oops, something went wrong...</p>
                </div>
            ) : (
                <div className="grid-container">
                    {jsonFiltrado.map((jsonDesc, index) => (
                        <div key={index} className="card"  onClick={() => handleOpenModal(jsonDesc)}>
                            <img src={jsonDesc.images["Poster Art"].url} alt={jsonDesc.title} className="poster" />
                            <p className="series-title">{jsonDesc.title}</p>
                        </div>
                    ))}
                </div>
            )}

            {isModalOpen && currentModalData && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} currentModalData={currentModalData}/>
            )}
        </>
    );
};
