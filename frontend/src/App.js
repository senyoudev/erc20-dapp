import {Injected} from './utils/connector'
import { useWeb3React} from '@web3-react/core'
import { useEffect } from 'react'
import OurApp from './components/OurApp'
function App() {

  const {activate,active} = useWeb3React()


  useEffect(() => {
    const connectWallet = async () => {
      if(!window.ethereum)
        return;

      try {
        activate(Injected)
        
      } catch (error) {
        console.error("Wallet connection denied, reload the page to try again.");
        return;
      }
      
      console.log(active)
    };
    connectWallet();
  },[]);

  return (
     <div>
      {window.ethereum ?
        (active ?
          <OurApp/>
          : (<p>Waiting for connection with wallet...</p>))
        : "Metamask or other EIP-1102 / EIP-1193 compliant wallet not found."
      }
    </div>
  );
}

export default App;
