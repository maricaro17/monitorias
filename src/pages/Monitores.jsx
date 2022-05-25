import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import FormRegisterMonitores from '../components/FormRegisterMonitores'

const Monitores = () => {

const [modalShow, setModalShow]= useState(false)

  return (
    <div>
        <Button onClick={()=>setModalShow(true)} >Agregar Monitor</Button>
        <FormRegisterMonitores show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
  )
}

export default Monitores