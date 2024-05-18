/** @format */

import fs from "fs";
import path from "path";

import { expect, it, vi } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocContent);
vi.stubGlobal("document", document);

it("should add and error paragraph to the id='errors' element", () => {
  showError("Test");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});
