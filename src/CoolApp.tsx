import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Code } from '@looker/components';
import styled from 'styled-components'

export function CoolApp() {
  // var ref = React.createRef();
  const [me, setMe] = useState({});
  const extensionContext = useContext<ExtensionContextData>(ExtensionContext)
  const sdk = extensionContext.coreSDK

  // ref.sdk = sdk;

  useEffect(()=>{
    apiCall();
  },[])

  const apiCall = async () => {
    const me = await sdk.ok(sdk.me())
    setMe(me)
  }

  useLayoutEffect(()=>{
    var pp = document.getElementById('pp-div');
    var new_pp = document.createElement('ping-pong');
    new_pp.sdk = sdk;
    pp?.appendChild(new_pp);
  },[])

  return (
    <div id="pp-div">
    
    </div>
  );
}

const StyledCode = styled(Code)`
  white-space: pre;
`