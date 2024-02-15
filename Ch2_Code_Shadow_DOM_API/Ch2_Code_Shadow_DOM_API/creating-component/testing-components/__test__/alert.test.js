import { expect, fixture, html } from "@open-wc/testing";

describe("my-test", () => {
  it("is accessible", async () => {
    const el = await fixture(html` <my-alert>This is a test</my-alert> `);
    expect(el).to.be.accessible();
  });

  it("does not show custom text", async () => {
    const el = await fixture(html` <my-alert class="info"></my-alert> `);
    expect(el.innerHTML).to.equal("");
  });

  it("renders with a class of info", async () => {
    const el = await fixture(html` <my-alert class="info"></my-alert> `);
    expect(el).to.have.class("info");
  });
});
