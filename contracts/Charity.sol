// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Charity {
    address payable private charityWallet;

    constructor(address payable _charityWallet) {
        charityWallet = _charityWallet;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than 0.");
        charityWallet.transfer(msg.value);
    }
}