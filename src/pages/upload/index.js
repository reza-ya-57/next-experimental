import React, { useState } from 'react';
import axios from 'axios';



export default function UploadFile() {
    const [state, setState] = useState({
        selectedFile: null
    })

    const onFileChange = event => {
        setState({ selectedFile: event.target.files[0] });
    };



    const onFileUpload = () => {
        const formData = new FormData();
        formData.append("file", state.selectedFile);

        axios.post("/test", formData)
            .then(res => {
                const url = window.URL.createObjectURL(
                    new Blob([res])
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.xlsx')
                document.body.appendChild(link);
            })
            .catch(err => {
                console.log(err.response)
            })

    };



    return (
        <div>
            <input type="file" onChange={onFileChange} accept=".xlsx, .xls, .csv" />
            <button onClick={onFileUpload}>آپلود فایل</button>
        </div>
    )
}
