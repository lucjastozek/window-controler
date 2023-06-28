interface Window {
  i: 0 | 1 | 2 | 3;
  j: 0 | 1 | 2 | 3 | 4;
  color: string;
  taken: boolean;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function createRandomWindow(): Window {
  const palette = ["#C10100", "#D7501B", "#D8BE3B", "#01AB99", "#074495"];
  return {
    i: pick([0, 1, 2, 3]),
    j: pick([0, 1, 2, 3, 4]),
    color: pick(palette),
    taken: true,
  };
}

interface WindowStarter {
  i: 0 | 1 | 2 | 3;
  j: 0 | 1 | 2 | 3 | 4;
}

export function createWindow(props: WindowStarter): Window {
  const palette = ["#C10100", "#D7501B", "#D8BE3B", "#01AB99", "#074495"];
  return {
    i: props.i,
    j: props.j,
    color: pick(palette),
    taken: true,
  };
}
