export {};

declare global {
  namespace Cypress {
    interface Chainable {
      findById(id: string): Chainable<any>;
      findByClass(className: string): Chainable<any>;
    }
  }
}
