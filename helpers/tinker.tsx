import { tHabit } from ".";

const templateConditions = [
  "β° wakeup",
  "π° anxious",
  "π§ββοΈ calm",
  "π midnight",
  "π€ sleepy",
  "βΉοΈ hungry",
  "π  frustrated",
  "π₯± bored",
  "π¬ craving",
];
const templateActions = [
  "ποΈ watch a movie",
  "πΏ shower",
  "π read a book",
  "πͺ₯ brush teeth",
  "π₯ drink water",
  "π§ββοΈ meditate",
  "π² prepare food",
  "π§Ή clean house",
  "π call someone",
  "πΆββοΈ go for a walk",
];

export const simpleHabit = (): tHabit => {
  return {
    id: undefined,
    conditions: [
      {
        title: templateConditions[Math.floor(Math.random() * templateConditions.length)],
      },
    ],
    actions: [
      {
        title: templateActions[Math.floor(Math.random() * templateActions.length)],
      },
    ],
  };
};
