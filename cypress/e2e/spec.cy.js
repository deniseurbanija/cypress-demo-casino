describe("My First Test", () => {
  beforeEach(() => {
    // Escucha el evento uncaught:exception
    cy.on("uncaught:exception", (err, runnable) => {
      // Devuelve false para evitar que la excepción no capturada detenga la prueba
      return false;
    });
  });

  it.only("Dark & light mode switch", () => {
    cy.visit("https://demo.casino/", {
      failOnStatusCode: false, //prevengo que el test falle si lanza errores 400 y 500
    });
    //compruebo que el modal de bienvenida sea visible y lo cierro
    cy.get(".modal__content").should("be.visible");
    cy.get(".modal__buttons > .button--t1").should("be.visible").click();

    cy.get(
      ".header--left > .theme-switch__wrapper > #switch > .switcher"
    ).click();
  });

  it("Registration", () => {
    //voy a la pagina de registro
    cy.visit("https://demo.casino/user/registration", {
      failOnStatusCode: false, //prevengo que el test falle si lanza errores 400 y 500
    });

    //compruebo que el modal de bienvenida sea visible y lo cierro
    cy.get(".modal__content").should("be.visible");
    cy.get(".modal__buttons > .button--t1").should("be.visible").click();

    //ingreso datos, compruebo que antes esten vacios y luego tengan el dato
    cy.get('[data-test="input-email"]')
      .should("be.empty")
      .type("denise@example.com")
      .should("have.value", "denise@example.com");

    cy.get(".input__wrapper > label").click();

    cy.get(":nth-child(2) > .special-radio__label").click();

    cy.get('[data-test="input-password"]')
      .should("be.empty")
      .type("1234")
      .should("have.value", "1234");

    cy.get('[data-test="input-password_confirmation"]')
      .should("be.empty")
      .type("1234")
      .should("have.value", "1234");

    //submit
    cy.get('[data-test="control-submit"]').click();

    //captcha
  });
});
