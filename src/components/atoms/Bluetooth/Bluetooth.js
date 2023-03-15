import React from 'react';

function Bluetooth({ setDevice, setCharacteristic, setServer, setService }) {

    const connectToDevice = async () => {
        const device = await navigator.bluetooth
        .requestDevice({
            filters: [
                { namePrefix: "Device Name" },
                { services: [ 'Service ID' ]}
            ]
        })
        setDevice(device)
        const server = await device.gatt.connect()
        setServer(server)
        const service = await server.getPrimaryService('Service ID')
        setService(service)
        const characteristic = await service.getCharacteristic('Characteristic ID')
        setCharacteristic(characteristic)
        device.addEventListener('gattserverdisconnected', onDisconnected)
    }

    const onDisconnected = (event) => {
        alert("Disconnected")
        const device = ""
        setDevice(device)
    }

    

    return (
        <>
        <button className="bluetooth" onClick={connectToDevice}>CONNECT</button>
        </>
    )

}

export default Bluetooth