// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FirstToken is ERC20   {
    address public owner;
     constructor(uint256 amount) ERC20("leprogrammeurmarocain", "pgmar") {
        _mint(msg.sender, amount);
        owner = msg.sender;
    }

    function getOwner() public view returns(address) {
        return owner;
    }

    function mint(address recipient, uint amount) external {
        require(msg.sender == owner,'Only the owner can mint');
        _mint(recipient,amount);
    }   

    function burn(uint amount) external {
        _burn(msg.sender,amount);
    }

    

}  




