import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import './Upload.css';

export default function Upload() {
    const [errorFile, setErrorFile ] = useState('');
    const [imageFile, setImageFile ] = useState({});

    const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
    };
  

    const onDrop = useCallback((acceptedFile, dontAcceptedFile) => {
        if(dontAcceptedFile.length != 0) {
            setErrorFile(dontAcceptedFile[0].errors[0].message)
            return
        }
        setErrorFile("")
        let formData = new FormData()
        formData.append('uploadedFiles', acceptedFile)
        setImageFile(acceptedFile.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
    }, [])

    const {getRootProps, getInputProps, isDragAccept} = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    })

  return (
    <div {...getRootProps()} className="dropzone-container">
        <input {...getInputProps()} />
        {
            
                errorFile == "" ?
                    <p>Adicione uma imagem aqui...</p> :
                    <p>{errorFile}</p>
        }

        <img src={imageFile.preview} style={img}/>
    </div>
  )
}