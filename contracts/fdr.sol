// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract FlightDataRecorder {
    struct FlightData {
        address airline;
        string flightNumber;
        uint altitude;
        uint speed;
        string location;
        uint timestamp;
    }

    mapping(uint => FlightData) public flightDataRecords;
    uint public recordCount;

    event FlightDataRecorded(uint indexed id, address indexed airline, string flightNumber, uint altitude, uint speed, string location, uint timestamp);

    function recordFlightData(string memory _flightNumber, uint _altitude, uint _speed, string memory _location) public {
        require(bytes(_flightNumber).length > 0, "Flight number cannot be empty");
        require(_altitude > 0, "Altitude must be greater than 0");
        require(_speed > 0, "Speed must be greater than 0");
        require(bytes(_location).length > 0, "Location cannot be empty");

        uint id = recordCount++;
        FlightData storage flightData = flightDataRecords[id];
        flightData.airline = msg.sender;
        flightData.flightNumber = _flightNumber;
        flightData.altitude = _altitude;
        flightData.speed = _speed;
        flightData.location = _location;
        flightData.timestamp = block.timestamp;

        emit FlightDataRecorded(id, msg.sender, _flightNumber, _altitude, _speed, _location, block.timestamp);
    }
}