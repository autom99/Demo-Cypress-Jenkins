/// <reference types= "cypress" />


Given("I make a GET request with url: {string} , path: {string} , query: {string} , key: {int}", (baseUrl,path,queryKey,queryValue) => {
    cy.request({
        method: 'GET',
        url: Cypress.env(baseUrl) + Cypress.env('reqResPrefix') + Cypress.env(path) + queryKey + "=" + queryValue,
        failOnStatusCode:false
    }).then((response) => {
        expect(response.duration).to.lessThan(Cypress.env('requestTimeout'))
    }).as('response')
});


Given("I should receive response with status code {int}", (statusCode) => {
   cy.get('@response').then($response => {
    expect($response.status).to.eq(
        statusCode
    )
   })
});

Given("I am authenticated user", () => {});

Given("I am un-authenticated user", () => {});

Given("I validate the response using data from {string} and file {string}", (schemaPath,file) => {
    cy.fixture(Cypress.env(schemaPath) + file).as('schema');
    const Ajv = require("ajv")
    const ajv = new Ajv() 
    cy.get('@schema').then(($schema)=>{
        cy.get('@response').then($response => {
            const isJsonValid = ajv.validate($schema,$response)
            expect(isJsonValid).to.be.true;
        })
    }) 
 });

 Given("TO-DO", () => {
     
 });


