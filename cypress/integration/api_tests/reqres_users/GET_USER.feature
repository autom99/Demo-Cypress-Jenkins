Feature: GET Users

    This is the API to get the Users data

    Scenario: Valid Response
        Given I am authenticated user
        When I make a GET request with url: "reqResBaseURL" , path: "pathUsers" , query: "?pages" , key: 2
        Then I should receive response with status code 200

    Scenario: Invalid Response
        Given I am un-authenticated user
        When I make a GET request with url: "reqResBaseURL" , path: "unknown" , query: "?pages" , key: 2
        Then I should receive response with status code 404

    Scenario Outline: Validate fields
        Given I am authenticated user
        When I make a GET request with url: "reqResBaseURL" , path: "pathUsers" , query: "?pages" , key: <key>
        Then I validate the response using data from "reqresFixtures" and file "users"
        Examples:
            | key |
            | 1   |
            | 2   |
            | 3   |





