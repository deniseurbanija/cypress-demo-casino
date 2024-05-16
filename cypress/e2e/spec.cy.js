describe("Demo Casino Challenge", () => {
  beforeEach(() => {
    cy.visit("https://demo.casino", { failOnStatusCode: false });
    cy.get(".mfp-close", { timeout: 4000 }).click();
    // Escucha el evento uncaught:exception
    cy.on("uncaught:exception", (err, runnable) => {
      // Devuelve false para evitar que la excepción no capturada detenga la prueba
      return false;
    });
  });

  it("Registration", () => {
    cy.get('[data-test="nav-reg-head"]').should("be.visible").click();

    cy.url().should("include", "/user/registration");

    //ingreso datos, compruebo que antes esten vacios y luego tengan el dato
    cy.get('[data-test="input-email"]')
      .should("be.visible")
      .should("be.enabled")
      .and("have.attr", "type", "email")
      .type("denise@example.com")
      .should("have.value", "denise@example.com");

    cy.get(".input__wrapper > label").should("be.visible").click();

    cy.get(":nth-child(2) > .special-radio__label").click();

    cy.get('[data-test="input-password"]')
      .should("be.visible")
      .should("be.enabled")
      .and("have.attr", "type", "password")
      .type("1234")
      .should("have.value", "1234");

    cy.get('[data-test="input-password_confirmation"]')
      .should("be.visible")
      .should("be.enabled")
      .and("have.attr", "type", "password")
      .type("1234")
      .should("have.value", "1234");

    //submit
    cy.get('[data-test="control-submit"]').click();

    //captcha
  });

  it("Dark & Light Mode", () => {
    //antes de cambiar a modo claro, compruebo que este en modo oscuro
    cy.get("html").should("have.class", "theme-dark");

    //switch
    cy.get(
      ".header--left > .theme-switch__wrapper > #switch > .switcher"
    ).click();

    //despues compruebo que este en modo claro
    cy.get("html").should("have.class", "theme-light");

    //switch
    cy.get(
      ".header--left > .theme-switch__wrapper > #switch > .switcher"
    ).click();

    //vuelvo a cambiar y compruebo que este en modo oscuro
    cy.get("html").should("have.class", "theme-dark");
  });
});
