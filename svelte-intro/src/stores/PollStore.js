import { writable } from 'svelte/store';

const PollStore = writable([
  {
		id: 1,
		question: 'Scala or Java?',
		answerA: 'Scala',
		answerB: 'Java',
		votesA: 5,
		votesB: 10,
	},
]);

export default PollStore;