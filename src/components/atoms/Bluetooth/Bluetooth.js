function Bluetooth() {

    const connectToDevice = async () => {
        let filters = [];
      
        let options = {};
        
          options.acceptAllDevices = true;
       
      
        try {
          console.log('Requesting Bluetooth Device...');
          console.log('with ' + JSON.stringify(options));
          const device = await navigator.bluetooth.requestDevice(options);
      
          console.log('> Name:             ' + device.name);
          console.log('> Id:               ' + device.id);
          console.log('> Connected:        ' + device.gatt.connected);
        } catch(error)  {
            console.log('Argh! ' + error);
        }
    }
    //     const device = await navigator.bluetooth
    //     .requestDevice({
    //         filters: [
    //             { namePrefix: "Device Name" },
    //             { services: [ 'Service ID' ]}
    //         ]
    //     })
    //     setDevice(device)
    //     const server = await device.gatt.connect()
    //     setServer(server)
    //     const service = await server.getPrimaryService('Service ID')
    //     setService(service)
    //     console.log("service : ", service)
    //     const characteristic = await service.getCharacteristic('Characteristic ID')
    //     setCharacteristic(characteristic)
    //     device.addEventListener('gattserverdisconnected', onDisconnected)
    // }

    // const onDisconnected = (event) => {
    //     alert("Device Disconnected")
    //     const device = ""
    //     setDevice(device)
    // }

    return (
        <>
        <button className="bluetooth" onClick={connectToDevice}>CONNECT</button>
        </>
    )

}

export default Bluetooth