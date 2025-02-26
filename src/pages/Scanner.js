import React from 'react'
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect ,useState } from 'react';

function Scanner() {
  const[scanResult,setScanResult] = useState(null);

  //run once only
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader',{
      qrbox:{
        width:500,
        height:500,
      },
      fps: 5, //speed default is 2
  
    });

    scanner.render(success,error);
    
    function success(result){
      scanner.clear();
      setScanResult(result);
  
    }
    function error(err){
      console.warn(err);
    }
  },[]);

  return (
    <div className='Scan'>
      <h1>QR CODE</h1>
      {
        scanResult
        ? <div>Success: <a href={scanResult}>{scanResult}</a></div>
        : <div id='reader'> </div>
      }
    </div>
  );
}

export default Scanner