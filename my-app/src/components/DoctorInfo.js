import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const DoctorInfo = ({ doctor, onShowPatients }) => {
    const navigate = useNavigate();
    const handle = async () => { 
            navigate('/patients'); 
    }; 
    return (
        <div className="doctor-info">
            <h3>Информация о враче</h3>
            <p><strong>ФИО:</strong> {doctor.Surname} {doctor.Name} {doctor.Middle_name}</p>
            <p><strong>Участок:</strong> {doctor.ID_section}</p>
            <p><strong>Стаж:</strong> {doctor.Experience} лет</p>
            <p><strong>Номер:</strong> {doctor.Phone_number}</p>
            <button className="btn" onClick={handle} >Список пациентов</button>
        </div>
    );
};

export default DoctorInfo;
