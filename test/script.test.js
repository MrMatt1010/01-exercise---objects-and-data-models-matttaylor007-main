import {
  personsName,
  secondFriend,
  getTaxRate,
  countries,
  artist,
  articles,
  menu,
} from "../Submission/script.js";

describe("person", () => {
  it('should have the name "Robert"', () => {
    expect(personsName).toEqual("Robert Pollock");
  });

  it('should have a second friend named "Sam"', () => {
    expect(secondFriend).toEqual("Sam");
  });
});

describe("getTaxRate", () => {
  it("should return the correct tax rate for UT", () => {
    const result = getTaxRate("ut");
    expect(result).toEqual(0.0685);
  });

  it("should return the correct tax rate for NV", () => {
    const result = getTaxRate("nv");
    expect(result).toEqual(0.08);
  });

  it("should return the correct tax rate for TX", () => {
    const result = getTaxRate("tx");
    expect(result).toEqual(0.0625);
  });

  it("should return the correct tax rate for AL", () => {
    const result = getTaxRate("al");
    expect(result).toEqual(0.04);
  });

  it("should return the correct tax rate for CA", () => {
    const result = getTaxRate("ca");
    expect(result).toEqual(0.0825);
  });
});

describe("countries", () => {
  it("should have the population of newZealand be 5000000", () => {
    const newZealand = countries.newZealand;
    expect(newZealand.population).toEqual(5000000);
  });

  it("should have the first city in newZealand be Auckland", () => {
    const newZealand = countries.newZealand;
    const firstCity = newZealand.cities[0];
    expect(firstCity.toLowerCase()).toEqual("auckland");
  });

  it("should have at least 3 countries", () => {
    const countriesLength = Object.keys(countries).length;
    const hasEnoughCountries = countriesLength >= 3;
    expect(hasEnoughCountries).toBe(true);
  });
});

describe("part B", () => {
  it("should be complete", () => {
    expect(artist).toBeTruthy();
    expect(articles).toBeTruthy();
    expect(menu).toBeTruthy();
  });
});
