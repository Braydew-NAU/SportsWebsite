const { JSDOM } = require("jsdom");

describe("Review Submission Functionality", () => {
  let dom, document;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html>
      <body>
        <form id="review-form">
          <input type="text" id="name" />
          <textarea id="review"></textarea>
          <select id="movie-select"></select>
          <button type="submit">Submit</button>
        </form>
        <div id="review-list"></div>
      </body>`
    );

    document = dom.window.document;
    global.document = document;
    global.window = dom.window;
    require("../script"); // Import script to attach event listeners
  });

  test("should add a review correctly", (done) => {
    document.getElementById("name").value = "John Doe";
    document.getElementById("review").value = "Great movie!";

    const select = document.getElementById("movie-select");
    const option = document.createElement("option");
    option.value = "Movie A";
    option.textContent = "Movie A";
    select.appendChild(option);
    select.value = "Movie A";

    document
      .getElementById("review-form")
      .dispatchEvent(new dom.window.Event("submit"));

    setTimeout(() => {
      const reviewSection = document.getElementById("reviews-Movie A");
      expect(reviewSection).not.toBeNull();
      expect(reviewSection.innerHTML).toContain("John Doe");
      expect(reviewSection.innerHTML).toContain("Great movie!");
      done();
    }, 100); // Allow time for DOM updates
  });
});
