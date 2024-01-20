import Settings from "../MapHardly";

test("Settings", () => {
  const settings = new Settings();

  const received = settings.getSettings();

  const expected = {
    theme: "dark",
    music: "trance",
    difficulty: "easy",
  };

  expect(received).hasOwnProperty(expected);
});

test("Settings user", () => {
  let userSettings = new Settings("light", "rock", "nightmare");

  const received = userSettings.getSettings();

  const expected = {
    theme: "light",
    music: "rock",
    difficulty: "easy",
  };

  expect(received).hasOwnProperty(expected);
});

