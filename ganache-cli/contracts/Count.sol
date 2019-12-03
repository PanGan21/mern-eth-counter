pragma solidity ^0.5.0;

contract Count {
    int count;

    function increment() public returns (int) {
        count += 1;
        return count;
    }

    function getCount() public view returns (int) {
        return count;
    }
}
