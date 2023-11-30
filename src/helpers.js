/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  const totalDays = 31;
  for (let i = 0; i >= totalDays; i++) {
    a++;
  }
  return a;
};

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-2",
    nr: 2,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-3",
    nr: 3,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-25",
    nr: 25,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-26",
    nr: 26,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-27",
    nr: 27,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-28",
    nr: 28,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-29",
    nr: 29,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-30",
    nr: 30,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  },
  {
    id: "hatch-31",
    nr: 31,
    img: "./img/window-closed.png",
    open: false,
    disabled: false,
    disabledModal: false
  }
  
];

export const createCalendar = () => shuffle(hatchArray);
