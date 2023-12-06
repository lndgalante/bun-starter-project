import { expect, test } from "bun:test";

import { sum } from "./index";

test("sum 2 + 2 = 4", async () => {
	expect(sum(2, 2)).toBe(4);
});
