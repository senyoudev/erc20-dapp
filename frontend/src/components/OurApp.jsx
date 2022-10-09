import React,{useState,useEffect} from 'react'
import { Row,Col,Container, Button } from 'react-bootstrap'
import {useContract} from '../hooks/useContract'
import FirstToken from '../contracts/FirstToken.json'
import { useWeb3React } from "@web3-react/core";



function OurApp() {
  const contract = useContract(FirstToken)
    const { account } = useWeb3React();

  //to store the data
  const [balance,setBalance] = useState("")
  const [address,setAddress] = useState("")

  const [nom,setNom] = useState("")
  const [symbol,setSymbol] = useState("")

  const [owner,setOwner] = useState("")
  const [decimals,setDecimals] = useState("")
  const [totalSupply, setTotalSupply] = useState("");
  

  const [receiver,setReceiver] = useState("")
  const [amount,setAmount] = useState(0)

  useEffect(() => {
    const storeData = async() => {
      //get the nom and the symbol
      const name = await contract?.contract?.methods.name().call()
      const symb = await contract?.contract?.methods.symbol().call()
      setNom(name)
      setSymbol(symb)

      const prop = await contract?.contract?.methods.owner().call()
      const decim = await contract?.contract?.methods.decimals().call()
      const supply = await contract?.contract.methods.totalSupply().call()

      setOwner(prop)
      setDecimals(decim)
      setTotalSupply(supply)


      const bal = await contract?.contract?.methods.balanceOf(address).call()
      if(bal !== undefined) {
        setBalance(bal)
      }
    }

    storeData()
  },[contract,address])


  const handleTransfer = async() => {
    if(receiver != "" && amount!=0) {
      await contract?.contract?.methods.transfer(receiver,amount).send({from:account})
    } else {
      console.log("please enter the receiver and the amount")
    }
  }

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center main-title">
        {nom}({symbol})
      </Row>
      <div className="d-flex flex-column box">
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="d-flex justify-content-center align-items-center">
            <span style={{ marginRight: "10px" }}>Balance of</span>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
          <Col className="d-flex justify-content-center">
            {balance != "" ? balance : 0} {symbol}
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col className="d-flex justify-content-center">Owner</Col>
          <Col className="d-flex justify-content-center">{owner}</Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col className="d-flex justify-content-center">Decimals</Col>
          <Col className="d-flex justify-content-center">{decimals}</Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col className="d-flex justify-content-center">Total Supply</Col>
          <Col className="d-flex justify-content-center">{totalSupply}</Col>
        </Row>
        <Row>
          <span>Receiver Address</span>
          <input
            type="text"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </Row>
        <Row>
          <span>Amount</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Row>
        <Row className="d-flex justify-content-center">
          <Button onClick={() => handleTransfer()}>Let's Transfer</Button>
        </Row>
      </div>
    </Container>
  );
}

export default OurApp