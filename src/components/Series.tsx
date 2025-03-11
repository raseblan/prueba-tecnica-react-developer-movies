import { useEffect, useState } from "react";
import json from "../post/sample.json";
import { Modal } from "./Modal";
import { GlobalWatch } from "../interfaces/globalWatch";
import { currentModalDataSet, errorSet, globalSlice, isModalOpenSet, jsonFiltradoSet, loadingSet, selectGlobal } from "../store/globalSlice";
import { useDispatch, useSelector } from "react-redux";


export const Series = () => {
    const {loading, error,jsonFiltrado,isModalOpen,currentModalData} = useSelector(selectGlobal)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadingSet(true));
        setTimeout(() => {
            const jsonPass = json.entries
                .filter((j: GlobalWatch) => j.releaseYear >= 2010 && j.programType === "series")
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

    const handleOpenModal = (series: GlobalWatch) => {
       dispatch(currentModalDataSet(series));
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
                        <div key={index} className="card" onClick={() => handleOpenModal(jsonDesc)}>
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
