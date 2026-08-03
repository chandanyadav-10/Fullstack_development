function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Chandan");
wrapInArray(35);
wrapInArray({ class: "MSc.IT" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("Masala", 20);
pair("Ginger", 30);
pair("Chai", { flavor: "Elaichi" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 20 };
const numberBoxC: Box<string> = { content: "30" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ Flavor: string }> = {
  status: 200,
  data: { Flavor: "Ginger" },
};
