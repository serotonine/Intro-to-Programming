const ordinal = require("./ordinal");

test("Cast number to ordinal", () => {
    // inputs
    const number = 13;
    // Act
    const result = ordinal(number);
    // Assert
    expect(result).toBe("13th");
    expect(ordinal(113)).toBe("113th");
    expect(ordinal(2)).toBe("2nd");
    expect(ordinal(1)).toBe("1st");
    expect(ordinal(3)).toBe("3rd");
}
);