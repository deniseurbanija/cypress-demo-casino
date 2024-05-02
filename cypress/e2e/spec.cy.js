describe("My First Test", () => {
  it("Add item to basket", () => {
    cy.visit("/sweets");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .card > .card-footer > .btn"
    ).click();
  });

  it("Complete form", () => {
    cy.visit("/basket");
    cy.get(":nth-child(1) > #name").type("Denise");
    cy.get(":nth-child(2) > #name").type("Urbanija");
    cy.get("#email").type("example@gmail.com");
    cy.get("#adress").type("1170 Av. 25 de mayo");
    cy.get("#country").click();
  });
});
