import calculateRewards from "../utils/calculateRewards";

describe(
  "calculateRewards Function",
  () => {
    // Positive Test Cases

    test(
      "should return 90 points for amount 120",
      () => {
        expect(
          calculateRewards(120)
        ).toBe(90);
      }
    );

    test(
      "should return 25 points for amount 75",
      () => {
        expect(
          calculateRewards(75)
        ).toBe(25);
      }
    );

    test(
      "should return 150 points for amount 150",
      () => {
        expect(
          calculateRewards(150)
        ).toBe(150);
      }
    );

    // Negative / Edge Test Cases

    test(
      "should return 0 points for amount below 50",
      () => {
        expect(
          calculateRewards(40)
        ).toBe(0);
      }
    );

    test(
      "should return 0 points for negative amount",
      () => {
        expect(
          calculateRewards(-100)
        ).toBe(0);
      }
    );

    test(
      "should handle decimal amount properly",
      () => {
        expect(
          calculateRewards(120.5)
        ).toBe(91);
      }
    );

    test(
      "should return 0 for exactly 50",
      () => {
        expect(
          calculateRewards(50)
        ).toBe(0);
      }
    );

    test(
      "should return 50 for exactly 100",
      () => {
        expect(
          calculateRewards(100)
        ).toBe(50);
      }
    );
  }
);